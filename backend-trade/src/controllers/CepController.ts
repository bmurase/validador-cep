import { Request, Response } from "express";
import CepRepository from "../infra/typeorm/repositories/CepRepository";
import CreateCepService from "../services/CreateCepService";
import ListCepsService from "../services/ListCepsService";

class CepController {

  public async create(request: Request, response: Response): Promise<Response> {
    const { city, cep } = request.body;
    
    const cepRepository = new CepRepository();
    const createCep = new CreateCepService(cepRepository);

    const novoCep = await createCep.execute({ city, cep });

    return response.json(novoCep);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const cepRepository = new CepRepository();
    const listCeps = new ListCepsService(cepRepository);

    const ceps = await listCeps.execute();

    return response.json(ceps);
  }
}

export default CepController;
