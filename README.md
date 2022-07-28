<h1 align="center">
    <br>
    <p align="center"> 🌻 API e Banco de Dados Casa Preta Doulas Utilizando CRUD, MongoDB, Autenticação e Login<p>
</h1></br>

<h1 align="center">


<p align="center">
<img src="material/projeto.gif" alt="logo casa preta doulas" width="500">
</p> <p align="center"> </p>

</br>

<!--ts-->
- [🌻 Casa Preta Doulas](#-Casa-Preta-Doulas)
- [📁 Arquitetura Final](#-Arquitetura-Final)
- [💻 Tecnologias Que Vamos Usar](#-Tecnologias-Que-Vamos-Usar)
- [🪄 Preparando o Ambiente Para o Projeto](#-Preparando-o-Ambiente-Para-o-Projeto)
- [🔓 Interface Gráfica Para Realizar os Testes de Rotas Doulas](#-Interface-Gráfica-Para-Realizar-os-Testes-de-Rotas-Doulas)
- [🪄 Preparando o Ambiente Para Autenticação](#-Preparando-o-Ambiente-Para-Autenticação)
- [🔐 Testando Rotas de Login e Proteção das Rotas](#-Testando-Rotas-de-Login-e-Proteção-das-Rotas)
- [✍🏽 Teste Jest](#-Teste-Jest)
- [🎄 Autora](#-Autora)


<!--te-->

</br>


## 🌻 Casa Preta Doulas

</br>

Olá, boas-vindas à documentação Casa Preta Doulas, meu projeto final para o curso de desenvolvimento backend da {Reprograma}. Trata-se de um banco que dados que tem como objetivo a construção de uma API que reúne informações de doulas pretas e pardas de todo lugar do Brasil.


</br>

##  📁 Arquitetura Final

</br>

Lembre-se que a arquitetura final do projeto precisa ficar exatamente dessa maneira.

```
 📁CASA-PRETA-DOULAS
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 admController.js
   |  |    |- 📄 doulasController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 admModels.js
   |  |    |- 📄 doulasModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 admRoutes.js
   |  |    |- 📄 doulasRoutes.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |  |--📁 test
   |  |   |- 📄 doulas.test.js
   |  |
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>


## 💻 Tecnologias Que Vamos Usar

</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `npm install --save-exact jest@28.1.0 --save-dev`| Jest é uma estrutura de teste JavaScript.|
| `swagger`| Gera a documentação.|
| `heroku`| hospeda a documentação.|

</br>

📄 Você pode visualizar meu [Swagger aqui](https://casa-preta-doulas.herokuapp.com/minha-rota-de-documentacao/#/).
</br>

📄 Você pode visualizar meu [Heroku aqui](https://casa-preta-doulas.herokuapp.com/).


</br>

## 🪄 Preparando o Ambiente Para o Projeto

</br>

📌 Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm.

Seguiremos a ordem de instalações no terminal:

- Clone o projeto através do comando:
`$git clone https://github.com/andrezapipolo/projetofinal`
- `npm init -y`
- `npm install `
- `npm install express `
- `npm install nodemon `
- `npm install mongoose `
- `npm i --save-dev dotenv`
- `npm install jsonwebtoken --save`
- `npm install bcrypt --save`
- `npm install --save-exact jest@28.1.0 --save-dev`
- Inicialize com o comando `npm start` para que você possa executar os testes localmente.

</br>

## 🔓 Interface Gráfica Para Realizar os Testes de Rotas Doulas

</br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através da ferramenta Postman. A interface é um CRUD.

</br>

| Verbo  |    EndPoint     |       Descrição da Rota             | Status | Auth | Login |
| ------ | -------------   | ------------------------------------| ------ | -----| ----- |
| GET    | /doulas         |  Listar todas as doulas             |   200  |  ❌  |  ❌  |
| GET    | /doulas/cidade  |  Listar a Doula pela cidade         |   200  |  ❌  |  ❌  |
| GET    | /doulas/estado  |  Listar a Doula pelo Estado         |   200  |  ❌  |  ❌  |
| GET    | /doulas/:id     |  Acessar a Doula pelo ID            |   200  |  ❌  |  ❌  |
| POST   | /doulas/add     |  Adicionar uma nova Doula           |   201  |  ✔️  |  ✔️  |
| DELETE | /doulas/:id     |  Deverá deletar uma Doula por ID    |   200  |  ✔️  |  ✔️  |
| PATCH  | /doulas/:id     |  Alterar dados de uma Doula pelo ID |   200  |  ✔️  |  ✔️  |


</br>

## 🪄 Preparando o Ambiente Para Autenticação

</br>

📌 Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.

Seguiremos a ordem de instalações no terminal:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

</br>

## 🔐 Testando Rotas de Login e Proteção das Rotas

</br>

 📌 Vamos usar 4 rotas de Login e proteção das rotas de Adm:

| Verbo  |   EndPoint  |      Descrição da Rota             | Status | Auth | Login |
| ------ | ----------- | -----------------------------------| ------ | -----| ----- |
| POST   | /adm        | Adicionar uma nova Doula           |   201  |  ✔️  |  ✔️  |
| DELETE | /adm/login  | Deverá deletar uma Doula por ID    |   200  |  ✔️  |  ✔️  |
| PATCH  | /adm/:id    | Alterar dados de uma Doula pelo ID |   200  |  ✔️  |  ✔️  |


 *PROTEÇÃO* Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token


</br>

## ✍🏽 Teste Jest

</br>

📌 Instalar o Jest dentro da pasta CASA-PRETA-DOULAS

- Inicialize o comando de instalação `npm install --save-exact jest@28.1.0 --save-dev` para instalar o Jest.
- Incluir o no package_json -> `"test:watch": "jest --watchAll"`.
- Inicialize com o comando `npm run test:watch` para testar.


</br>

## 🎄 Autora

</br>

<p align="center">
<a>
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQFUFLABHg5xfA/profile-displayphoto-shrink_800_800/0/1646500768370?e=1659571200&v=beta&t=ZeyR8RdmYcjcC_Mfr83iTLwkrQT3MR74QzceWIdbWfI" width="100px;" alt="Foto de Perfil de Andreza"/>
 <br/>
</a>
</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/andrezapipolo" target="_blank"><img src="https://img.shields.io/badge/-Andreza_Pipolo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/andrezapipolo" target="_blank"></a> </p>

<p align="center">
<img src="https://user-images.githubusercontent.com/84551213/171416454-ab93ab7f-e5a0-4276-81ec-4f5cb79dff31.png" alt="logo da reprograma" border="0" width = "200" /> <p align="center"></p>