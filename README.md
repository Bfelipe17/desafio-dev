# CNAB Financial
## _Desafio da Bycoders_

CNAB Financial é uma aplicação do desafio fullstack da bycoders. Nessa aplicação nos é dado um arquivo com alguns CNABs e devemos interpretar e salvar esses dados e depois mostrar no frontend.

## Construído com

### Backend

  * `elixir`
  * `phoenix`
  * `postgresql`

### Frontend

  * `react`

## Funcionalidades

- Autenticação via JWT
- Upload de arquivo
- Filtro por loja

## 💻 Pré-requisitos

Antes de começar, verifique os seguintes requisitos:
* Ter a versão mais recente do `docker`
* Se você tiver o Postgresql instalado na sua máquina, desative com o seguinte comando: `systemctl stop postgresql`.
* [Ler a documentação da API](https://documenter.getpostman.com/view/9944660/Uz5MFZmH)


## ☕ Rodando o projeto 

Para rodas o projeto, siga estas etapas:

```zsh
git clone git@github.com:Bfelipe17/desafio-dev.git
docker compose up --build
```

e os seguintes endpoints estarão disponíveis:

* `http://0.0.0.0:3000` para o frontend
* `http://0.0.0.0:8080` para o backend
* `0.0.0.0:5432` para o database


## Testando a api

para testar a api, execute os seguintes comandos:

* no terminal, rode o seguinte comando: `docker compose run --rm cnab_backend mix test`