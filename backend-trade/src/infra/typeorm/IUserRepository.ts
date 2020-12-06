import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import User from "./schemas/User";

export default interface ICepRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
