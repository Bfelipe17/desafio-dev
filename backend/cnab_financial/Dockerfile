# imagem base
# Alpine é uma imagem mínima do Docker baseada no Alpine Linux com um índice de pacotes completo e apenas 5 MB de tamanho!
FROM elixir:1.13.3-alpine

# colocando todos os arquivos do projeto na pasta app,
# para não misturar com os arquivos do contêiner
WORKDIR /app

# instalando o gerenciar de pacotes do elixir
RUN mix local.hex --force && \
  mix local.rebar --force

# também funciona essa sintaxe:
# RUN mix do local.hex --force, local.rebar --force

# copiando tudo da raiz do projeto para o contêiner docker
COPY . .

# instalando as dependencias
RUN mix do deps.get, deps.compile

# A instrução EXPOSE expõe uma porta específica com um protocolo especificado dentro de um Docker Container.
# A instrução EXPOSE atua apenas como uma plataforma de informações (como Documentação) entre o criador da imagem Docker e o indivíduo que executa o Container.
# Syntax: EXPOSE <port>/<protocol>
EXPOSE 4000