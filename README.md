[<h3>English version here</h3>](https://github.com/DouSam/Lancho-Control/blob/main/README.us.md)

<h1 align="center">MERN stack</h1>

---

<p align="center">Esse é um projeto template demonstrando como pode ser feito o uso da stack MERN(Mongo, Express, React, Node), aqui temos a implementação do back end e nesse outro repositório está a implementação do React como front end.
Aqui eu utilizo a arquitetura de camadas, basicamente é uma API REST para fornecer os dados ao front. Essa API não é RESTFul pois não implementa HATEOAS.</p>

<p align="center">
 <a href="#funcionalidades">Funcionalides</a> • 
 <a href="#pré-requisitos">Requisitos</a> • 
 <a href="#executando(servidor)">Executando</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#autor">Autor</a>
</p>

---

### 🏆 Funcionalidades

- [x] Conexão com o banco de dados.
- [ ] Criar modelo que será utilizado pela API.
- [ ] Criar a camada de acesso ao banco.
- [ ] Criar a camada de serviço.
- [ ] Criar a camada de de rota.
- [ ] Criar os metodos GET(All e por id), POST, PUT e DELETE.

---

### 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/try/download/community). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

---

### 🎲 Executando(Servidor)

```bash
# Clone este repositório
$ gh repo clone DouSam/MERN_STACK

# Acesse a pasta do projeto no terminal/cmd

# Instale as dependências
$ npm install

#Crie o arquivo config.env no padrão abaixo

HOST=127.0.0.1
PORT=2890
MONGO_URI=mongodb://127.0.0.1:27017/
DB_NAME=DBNAME

# Execute a aplicação
$ node app.js

# O servidor inciará na porta inserida no arquivo config.env - acesse <http://localhost:<PORT>>
```

---

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)
- [CORS](https://github.com/expressjs/cors/)
- [.ENV](https://docs.dotenv.org/)
- [MongoDB Driver](https://www.npmjs.com/package/mongodb)

---

### Otimizações e refatorações

- [ ] Nenhuma até o momento 😄.

# Autor 😄

<p align="center">
<a href="https://github.com/DouSam" align="center">
 <img style="border-radius: 60%;" src="https://lh3.googleusercontent.com/o49VhdIK8p4hVv08luql8OyVy9d3Y8McrzVD8PPQ28UU7Gq3eAN-9KPi0zCxMgHh_jY0Ah7qj4sHkQXvEOa408P09QtEkDTSngRrKtDeJlllYuaKDXPH6ww3TUXw2sdHoNSIuwCA1fY=w2400" width="150px;" alt=""/>
 <br />
 <sub><b>Douglas Samuel</b></sub></a>

Feito com ❤️ por Douglas Samuel!

[![Gmail Badge](https://img.shields.io/badge/-douglassam007@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:douglassam007@gmail.com)](mailto:douglassam007@gmail.com)
</p>
