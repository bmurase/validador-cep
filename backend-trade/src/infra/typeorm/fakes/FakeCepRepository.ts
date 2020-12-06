import { ObjectID } from "mongodb";
import Cep from "../schemas/Cep";
import ICreateCepDTO from "../../../dtos/ICreateCepDTO";

class FakeCepRepository {
  private ceps: Cep[] = [];

  public async create({ city, cep }: ICreateCepDTO): Promise<Cep> {
    const novoCep = new Cep();

    Object.assign(novoCep, {
      id: new ObjectID(),
      city,
      cep,
    });

    this.ceps.push(novoCep);

    return novoCep;
  }

  public async index(): Promise<Cep[]> {
    return this.ceps;
  }
}

export default FakeCepRepository;
