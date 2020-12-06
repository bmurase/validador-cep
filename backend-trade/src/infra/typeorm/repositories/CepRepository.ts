import { MongoRepository, getMongoRepository } from "typeorm";
import Cep from "../schemas/Cep";
import ICreateCepDTO from "../../../dtos/ICreateCepDTO";
import ICepRepository from "../ICepRepository";

class CepRepository implements ICepRepository {
  private ormRepository: MongoRepository<Cep>;

  constructor() {
    this.ormRepository = getMongoRepository(Cep);
  }

  public async create({ city, cep }: ICreateCepDTO): Promise<Cep> {
    const novoCep = this.ormRepository.create({
      city,
      cep,
    });

    await this.ormRepository.save(novoCep);

    return novoCep;
  }

  public async index(): Promise<Cep[]> {
    const ceps = await this.ormRepository.find();

    return ceps;
  }
}

export default CepRepository;
