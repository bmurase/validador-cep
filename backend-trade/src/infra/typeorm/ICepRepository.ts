import ICreateCepDTO from "../../dtos/ICreateCepDTO";
import Cep from "./schemas/Cep";

export default interface ICepRepository {
  index(): Promise<Cep[]>;
  create({ city, cep }: ICreateCepDTO): Promise<Cep>;
}
