[<h3>Versão em português</h3>](https://github.com/DouSam/MERN_STACK/blob/master/README.br.md)

<h1 align="center">MERN stack</h1>

---

<p align="justify">This is a template project demonstrating how the MERN stack(Mongo, Express, React, Node) can be used, here we have the back end implementation and there is the React implementation as the front end.
Here I use the layered architecture, basically it is a REST API to provide the data to the front end. This API is not RESTFul as it does not implement HATEOAS.</p>

Front-End: [MERN Stack React](https://github.com/DouSam/MERN_STACK_REACT)

<p align="center">
 <a href="#Functionalities">Functionalities</a> • 
 <a href="#Prerequisites">Prerequisites</a> • 
 <a href="#Running">Running</a> • 
 <a href="#Technologies">Technologies</a> • 
 <a href="#Author">Author</a>
</p>

---

### 🏆Functionalities

- [x] Database connection.
- [x] Create the database access layer.
- [x] Create the service layer.
- [x] Create the routing layer.
- [x] Create the GET(All and by id), POST, PUT and DELETE methods.

---

### 📋 Prerequisites

Before you start, you will need to have the following tools installed on your machine:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/try/download/community). 
In addition it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

---

### 🎲 Running

```bash
# Clone this repository
$ gh repo clone DouSam/MERN_STACK

# Go to the project folder in terminal/cmd

# Install the dependencies
$ npm install

# Create the config.env file in the pattern below

HOST=127.0.0.1
PORT=2890
MONGO_URI=mongodb://127.0.0.1:27017/
DB_NAME=DBNAME

# Run the application
$ npm start

# The server will start on the port entered in the config.env file - go to <http://localhost:<PORT>>
```

---

### 🛠 Technologies

The following tools were used in the construction of the project:

- [Node.js](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/pt-br/)
- [CORS](https://github.com/expressjs/cors/)
- [.ENV](https://docs.dotenv.org/)
- [MongoDB Driver](https://www.npmjs.com/package/mongodb)
- [Jest](https://jestjs.io/pt-BR/)

---

### Optimizations and refactorings

- [ ] Add HATEOAS.
- [ ] Add checks to the routingTrains file to return the correct code.

# Author 😄

<p align="center">
<a href="https://github.com/DouSam" align="center">
 <img style="border-radius: 60%;" src="https://lh3.googleusercontent.com/o49VhdIK8p4hVv08luql8OyVy9d3Y8McrzVD8PPQ28UU7Gq3eAN-9KPi0zCxMgHh_jY0Ah7qj4sHkQXvEOa408P09QtEkDTSngRrKtDeJlllYuaKDXPH6ww3TUXw2sdHoNSIuwCA1fY=w2400" width="150px;" alt=""/>
 <br />
 <sub><b>Douglas Samuel</b></sub></a>

Made with ❤️ by Douglas Samuel!

[![Gmail Badge](https://img.shields.io/badge/-douglassam007@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:douglassam007@gmail.com)](mailto:douglassam007@gmail.com)
</p>
