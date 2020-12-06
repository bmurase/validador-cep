import { ObjectID } from "mongodb";
import User from "../schemas/User";
import ICreateUserDTO from "../../../dtos/ICreateUserDTO";

class FakeUserRepository {
  private users: User[] = [];

  public async create({ email, password }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: new ObjectID(),
      email,
      password,
    });

    this.users.push(user);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);

    return findUser;
  }
}

export default FakeUserRepository;
