<h1 align="center">
    Validador de CEPs de Gotham City
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#arrow_forward-execução">Execução</a>
</p>

![App Screenshot](https://res.cloudinary.com/bmurase/image/upload/v1607286863/Screenshot_2_rmpvqj.png)

![App Screenshot](https://res.cloudinary.com/bmurase/image/upload/v1607286862/ceps_kp9fjq.png)

![App Screenshot](https://res.cloudinary.com/bmurase/image/upload/v1607286862/Screenshot_1_awtzfu.png)

## :rocket: Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- Node.js
- Express.js
- Typescript
- Jest
- MongoDB
- TypeORM
- ReactJS
- react-router-dom
- styled-components
- polished
- axios

## :gear: Instalação

 ```
  git clone https://github.com/bmurase/validador-cep
  cd validador-cep
  yarn install
  cd backend-trade
  yarn install
 ```
 
 ## :arrow_forward: Execução
 
 Para utilizar o sistema, é necessário que você tenha o MongoDB instalado e altere as credenciais do banco (host/porta) em ```backend-trade/src/database/index.ts```. 
 Caso não tenha e utilize Docker, crie um container com o comando:
 ```
  docker run --name mongodb -p 27017:27017 -d -t mongo
  docker start mongodb
 ```
 
 Com a conexão com o banco preparada, vá para a raiz do projeto e execute:
 ```
  yarn start
  cd backend-trade
  yarn start
 ```
 
 O front-end executa na porta 3000, enquanto o back-end utiliza a porta 3333. 
 
 Agora é só criar sua conta e fazer login com as credenciais utilizadas no cadastro!
 
 Para executar os testes, seguem os comandos a partir da raiz do projeto:
 ```
  cd backend-trade
  yarn test
 ```
 
