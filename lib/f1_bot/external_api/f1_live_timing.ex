defmodule F1Bot.ExternalApi.F1LiveTiming do
  @moduledoc false
  require Logger

  @finch_instance F1Bot.Finch
  @api_base "https://livetiming.formula1.com/static/"

  @cache_root Path.join(["tmp", "live-timing-cache"])
  @missing_file_suffix ".404"
  @req_sleep_time 500

  def request(method, full_url) do
    Finch.build(method, full_url)
    |> Finch.request(@finch_instance)
  end

  def session_info(base_url \\ @api_base) do
    url = api_url(base_url, "SessionInfo.json")

    request(:get, url)
    |> parse_json_response()
  end

  def current_archive_url_if_completed() do
    with {:ok, response} <- session_info(),
         %{"Status" => "Complete"} <- response["ArchiveStatus"],
         path when path != nil <- response["Path"] do
      url =
        @api_base
        |> URI.merge(path)
        |> URI.to_string()

      {:ok, url}
    else
      nil -> {:error, :nil_archive_path}
      %{} -> {:error, :unacceptable_archive_status}
      {:error, err} -> {:error, err}
    end
  end

  def session_status(base_url) do
    url = api_url(base_url, "SessionStatus.json")

    request(:get, url)
    |> parse_json_response()
  end

  def archive_list(year) do
    url =
      api_url(@api_base, "#{year}/Index.json")
      |> URI.to_string()

    request(:get, url)
    |> parse_json_response()
  end

  def fetch_archive_cached(url) do
    with {:ok, {cached_path, missing_path}} <- save_path_for_archive(url) do
      cond do
        File.exists?(cached_path) ->
          Logger.info("Fetching from cache: #{url}")
          File.read(cached_path)

        File.exists?(missing_path) ->
          Logger.info("404 from cache: #{url}")
          {:error, :cached_404}

        true ->
          File.mkdir_p!(Path.dirname(cached_path))
          download_save_archive(url, cached_path, missing_path)
      end
    else
      x when is_list(x) -> {:error, :invalid_url}
    end
  end

  @doc false
  def download_all_archives(base_url \\ @api_base, recheck_index \\ false)
      when is_binary(base_url) and is_boolean(recheck_index) do
    fetch_process_base_index(base_url, recheck_index)
  end

  @doc false
  defp fetch_process_base_index(base_url, recheck_index) do
    url = Path.join(base_url, "Index.json")

    fetch_fun =
      if recheck_index do
        &download_save_archive/1
      else
        &fetch_archive_cached/1
      end

    with {:ok, json} <- fetch_fun.(url),
         {:ok, data} <- parse_json(json) do
      if data["Years"] != nil do
        for year <- data["Years"] do
          year_url = Path.join(base_url, year["Path"])
          fetch_process_year(year_url, base_url, recheck_index)
        end
        |> List.flatten()
      else
        {:error, :missing_years}
      end
    end
  end

  @doc false
  defp fetch_process_year(year_url, base_url, recheck_index) do
    url = Path.join(year_url, "Index.json")

    fetch_fun =
      if recheck_index do
        &download_save_archive/1
      else
        &fetch_archive_cached/1
      end

    with {:ok, json} <- fetch_fun.(url),
         {:ok, data} <- parse_json(json) do
      if data["Meetings"] != nil do
        for meeting <- data["Meetings"],
            session <- meeting["Sessions"] do
          session_url = Path.join(base_url, session["Path"])
          fetch_process_session(session_url, base_url, recheck_index)
        end
      else
        {:error, :missing_meetings}
      end
    end
  end

  @doc false
  defp fetch_process_session(session_url, _base_url, recheck_index) do
    url = Path.join(session_url, "Index.json")

    fetch_fun =
      if recheck_index do
        &download_save_archive/1
      else
        &fetch_archive_cached/1
      end

    with {:ok, json} <- fetch_fun.(url),
         {:ok, data} <- parse_json(json) do
      if data["Feeds"] != nil do
        for {_name, feed} <- data["Feeds"] do
          feed_file = feed["StreamPath"] || feed["KeyFramePath"]
          feed_url = Path.join(session_url, feed_file)

          feed_url
          |> fetch_archive_cached()
          |> elem(0)
        end
      else
        {:error, :missing_feeds}
      end
    end
  end

  defp download_save_archive(url) do
    with {:ok, {cached_path, missing_path}} <- save_path_for_archive(url) do
      download_save_archive(url, cached_path, missing_path)
    end
  end

  defp download_save_archive(url, file_path, missing_path) do
    Logger.info("Fetching from origin: #{url}")
    # This is slow on purpose to promote caching
    Process.sleep(@req_sleep_time)

    encoded_url = URI.encode(url)

    with {:ok, response} <- request(:get, encoded_url),
         200 <- response.status do
      unlock_write_lock(file_path, response.body)
      {:ok, response.body}
    else
      code when is_integer(code) ->
        Logger.error("Failed to fetch from origin: #{encoded_url} (status code #{code})")
        unlock_write_lock(missing_path, "")
        {:error, :"code_#{code}"}

      {:error, error} ->
        Logger.error("Failed to fetch from origin: #{encoded_url} #{inspect(error)}")
        {:error, error}
    end
  end

  defp unlock_write_lock(file_path, contents) do
    File.mkdir_p!(Path.dirname(file_path))

    read_write = 0o664
    read_only = 0o444

    if File.exists?(file_path) do
      File.chmod!(file_path, read_write)
    end

    File.write!(file_path, contents)
    File.chmod!(file_path, read_only)
  end

  defp save_path_for_archive(url) do
    with [_empty, path] <- String.split(url, ~r|^https?://livetiming.formula1.com/static/|) do
      expanded = Path.expand(path, "/")
      cached_file_path = Path.join(@cache_root, expanded)
      missing_file_path = cached_file_path <> @missing_file_suffix
      {:ok, {cached_file_path, missing_file_path}}
    else
      x when is_list(x) -> {:error, :invalid_url}
    end
  end

  defp parse_json_response({:ok, %{body: body}}) when is_binary(body) do
    parse_json(body)
  end

  defp parse_json_response({:error, error}) do
    {:error, error}
  end

  defp parse_json(body) when is_binary(body) do
    body
    |> String.replace_prefix("\uFEFF", "")
    |> Jason.decode()
  end

  defp api_url(base_url, endpoint) do
    URI.merge(base_url, endpoint)
  end
end