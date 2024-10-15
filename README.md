# Avaliação Final do Módulo - Introdução ao Back-End:

API de cadastro de usuários e mensagens.

## Tecnologia do projeto:

- Javascript

## Iniciando:
- Para iniciar o projeto Node:
    - npm init -y

No arquivo package.json alterar o script para:
    "scripts": {
        "dev": "node src/index.js"
    }

- Instalar globalmente:
    - npm i -g nodemon

- Instalar como dependência de desenvolvimento:
    - npm i sucrase -D
    - npm i nodemon -D

Mudar arquivo pacage.json novamente:
    "scripts": {
        "dev": "nodemon src/index.js"
    }

Criar um arquivo nodemon.json:
    {
    "execMap": {
        "js": "node -r sucrase/register"
      }
    }

- Instalar dependências:
    - npm i express
    - npm i cors
    - npm i bcrypt
    - npm i uuid

Para rodar o código:
    - npm run dev

## Documentação:
[Documentation Postman](https://documenter.getpostman.com/view/38440806/2sAXxTcAsf)