<h1 align="center">
    <br>
    <p align="center"> 🌻 API e Banco de Dados Casa Preta Doulas Utilizando CRUD, MongoDB e Autenticação <p>
</h1></br>


<!--ts-->
- [🌻 Casa Preta Doulas](#-Casa-Preta-Doulas)
- [📁 Arquitetura Final](#-Arquitetura-Final)
- [💻 Tecnologias que vamos usar](#-tecnologias-que-vamos-usar)
- [🪄 Preparando o ambiente para o projeto](#-preparando-o-ambiente-para-o-projeto)
- [🔓 Interface gráfica para realizar os testes de rotas Doulas](#-Interface-gráfica-para-realizar-os-testes-de-rotas-Doulas)
- [🪄 Preparando o ambiente para autenticação](#-preparando-o-ambiente-para-autenticação)
- [🔐 Testando rotas de login e proteção das rotas](#-Testando-rotas-de-login-e-proteção-das-rotas)
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
   |  |   |- 📄 adm.test.js
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

## 💻 Tecnologias que vamos usar

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

## 🪄 Preparando o ambiente para o projeto

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

## 🔓 Interface gráfica para realizar os testes de rotas Doulas

</br>

📌 Este projeto está com os métodos HTTP organizados. Você pode testar as rotas Get, Post,Delete e Patch através da ferramenta Postman. A interface é um CRUD. Vamos precisar criar 7 rotas para Doulas.

</br>

✅ poder listar todas as doulas.
<br>✅ poder listar a Doula pela cidade.
<br>✅ poder listar a Doula pelo Estado.
<br>✅ poder acessar a Doula pelo ID.
<br>✅ poder adicionar uma nova Doula.
<br>✅ poder deverá deletar uma Doula por ID.
<br>✅ poder alterar dados de uma Doula pelo ID.

</br>

**`GET`** Listar todas as Doulas.  | `http://localhost:1313/`;

**`GET`** Listar a Doulas pela cidade. | `http://localhost:1313/cidades`;

**`GET`** Listar a Doulas pelo estado. | `http://localhost:1313/estado`;

**`GET`** Acessar a Doula pelo ID. | `http://localhost:1313/:id`;

**`POST`** Adicionar uma nova Doula.  | `http://localhost:1313/add`;

**`DELETE`** Deverá deletar uma Doula por ID. | `http://localhost:1313/:id`;

**`PATCH`** Alterar dados de uma Doula pelo ID.  | `http://localhost:1313/:id`;

</br>

## 🪄 Preparando o ambiente para autenticação

</br>

📌 Criar arquivo .env (adicionar no .gitignore) e usar o arquivo .env.example como modelo, colocando assim os seus dados.

Seguiremos a ordem de instalações no terminal:

- Inicialize o comando de instalação `npm i express cors` para instalar o cors.
- Inicialize o comando de instalação `npm i --save-dev dotenv` para instalar dontenv.
- Inicialize com o comando `npm start` para que você possa executar os testes.

</br>

## 🔐 Testando rotas de login e proteção das rotas

</br>

 📌 Vamos usar 5 rotas para Adm:

**`GET`** Listar todos os adm | `localhost:1313/adm`;

**`Post`** Autenticar adm | `localhost:1313/adm`;

**`Post`** Autenticar login | `localhost:1313/adm/login`;

**`DELETE`** Deletar um adm por id específico   | `localhost:1313/adm/`;

**`PROTEÇÃO`** Para testar via Postman, passar bearer token no header de autenticação $ Bearer Token

[Visualize o meu Swagger aqui](https://casa-preta-doulas.herokuapp.com/minha-rota-de-documentacao/#/)

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