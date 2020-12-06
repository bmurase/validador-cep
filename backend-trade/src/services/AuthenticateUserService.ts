import AppError from '../AppError';
import IUserRepository from '../infra/typeorm/IUserRepository';
import User from '../infra/typeorm/schemas/User';
import HashProvider from '../providers/HashProvider';

interface IRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  constructor(
    private usersRepository: IUserRepository
  ) {}

  public async execute({email, password}: IRequest): Promise<User> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    const hashProvider = new HashProvider();

    const passwordMatches = await hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatches) {
      throw new AppError('Incorrect e-mail/password combination', 401);
    }

    return user;
  }
}

export default AuthenticateUserService;