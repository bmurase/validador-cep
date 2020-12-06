import express from "express";
import SessionController from "./controllers/SessionController";
import CepController from "./controllers/CepController";
import UserController from "./controllers/UserController";

const routes = express.Router();

const sessionController = new SessionController();
const cepController = new CepController();
const userController = new UserController();

routes.post('/sessions', sessionController.create);
routes.get('/cep', cepController.index);
routes.post('/cep', cepController.create);
routes.post('/user', userController.create);

export default routes;
