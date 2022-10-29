defmodule F1Bot.F1Session.EventGenerator do
  alias F1Bot.F1Session
  alias F1Bot.F1Session.Common.Event

  def generate_driver_summary_events(session = %F1Session{}, driver_number)
      when is_integer(driver_number) do
    with {:ok, summary} <- F1Session.driver_summary(session, driver_number),
         {:ok, session_best_stats} <- F1Session.session_best_stats(session) do
      payload = %{
        driver_number: driver_number,
        driver_summary: summary,
        session_best_stats: Map.from_struct(session_best_stats)
      }

      scope = :"driver:#{driver_number}"
      [Event.new(scope, :summary, payload)]
    else
      {:error, _} -> []
    end
  end

  def generate_session_reset_events(session = %F1Session{}, driver_numbers) do
    primary_event = F1Session.Common.Event.new(:session_info, :reset_session, nil)

    summary_events =
      driver_numbers
      |> Enum.map(&generate_driver_summary_events(session, &1))
      |> List.flatten()

    [primary_event | summary_events]
  end

  def maybe_generate_session_clock_events(session = %F1Session{}) do
    with clock when clock != nil <- session.clock,
         session_clock <- F1Session.Clock.session_clock_from_local_time(clock, Timex.now()),
         last_session_clock <- session.event_deduplication[:session_clock],
         true <- session_clock != last_session_clock do
      events = [F1Session.Clock.to_event(clock)]
      session = put_in(session, [Access.key(:event_deduplication), :session_clock], session_clock)
      {session, events}
    else
      _ -> {session, []}
    end
  end

  def generate_state_sync_events(session = %F1Session{}) do
    driver_numbers =
      session
      |> F1Session.driver_list()
      |> elem(1)
      |> Enum.map(& &1.driver_number)

    [
      F1Session.DriverCache.to_event(session.driver_cache),
      F1Session.SessionInfo.to_event(session.session_info),
      F1Session.LapCounter.to_event(session.lap_counter),
      Enum.map(driver_numbers, &generate_driver_summary_events(session, &1)),
      F1Session.Clock.to_event(session.clock),
    ]
    |> List.flatten()
  end
end