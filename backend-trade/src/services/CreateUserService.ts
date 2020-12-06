import ICreateUserDTO from "../dtos/ICreateUserDTO";
import User from "../infra/typeorm/schemas/User";
import IUserRepository from "../infra/typeorm/IUserRepository";
import AppError from "../AppError";
import HashProvider from "../providers/HashProvider";

class CreateUserService {
  constructor(private userRepository: IUserRepository) {}

  public async execute({ email, password }: ICreateUserDTO): Promise<User> {
    const hashProvider = new HashProvider();

    const hashedPassword = await hashProvider.generateHash(password);
    
    const user = await this.userRepository.create({
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;