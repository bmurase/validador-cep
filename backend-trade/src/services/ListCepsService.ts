import Cep from "../infra/typeorm/schemas/Cep";
import ICepRepository from "../infra/typeorm/ICepRepository";

class ListCepsService {
  constructor(private cepRepository: ICepRepository) {}

  public async execute(): Promise<Cep[]> {
    const ceps = await this.cepRepository.index();

    return ceps;
  }
}

export default ListCepsService;