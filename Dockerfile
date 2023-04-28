FROM elixir:1.14-slim

ENV MIX_ENV=prod

RUN apt-get update && \
    apt-get install -y build-essential cmake erlang-dev gnuplot npm

RUN mix local.hex --force && mix local.rebar --force

RUN useradd -m app
RUN mkdir /app
WORKDIR /app

ADD mix.exs /app
ADD mix.lock /app
ADD config /app/config
RUN mix deps.get && mix deps.compile

ADD . /app 
RUN mix assets.setup && mix assets.deploy && mix release && chown -R app:app /app

USER app

CMD ["/app/entrypoint.sh"]
