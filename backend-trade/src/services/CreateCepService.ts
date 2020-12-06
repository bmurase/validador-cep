import ICreateCepDTO from "../dtos/ICreateCepDTO";
import Cep from "../infra/typeorm/schemas/Cep";
import ICepRepository from "../infra/typeorm/ICepRepository";
import AppError from "../AppError";

class CreateCepService {
  constructor(private cepRepository: ICepRepository) {}

  public async execute({ city, cep }: ICreateCepDTO): Promise<Cep> {
    if (Number(cep) > 999999 || Number(cep) < 100000) {
      throw new AppError('CEP must be a number between 100.000 and 999.999');
    }

    const regex = /(\d)(?=\d\1)/;

    if (regex.test(cep)) {
      throw new AppError('CEP must be a number with no alternated repeated digits in pairs')
    }
    
    const novoCep = await this.cepRepository.create({ city, cep });

    return novoCep;
  }
}

export default CreateCepService;
