import { MongoRepository, getMongoRepository } from "typeorm";
import User from "../schemas/User";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";
import IUserRepository from "../IUserRepository";

class UserRepository implements IUserRepository {
  private ormRepository: MongoRepository<User>;

  constructor() {
    this.ormRepository = getMongoRepository(User);
  }

  public async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      email,
      password,
    });

    await this.ormRepository.save(user);

    return user;
  }
  
  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({
      where: { email },
    });

    return findUser;
  }
}

export default UserRepository;
