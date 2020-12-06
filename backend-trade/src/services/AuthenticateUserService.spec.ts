import AppError from '../AppError';
import FakeUserRepository from '../infra/typeorm/fakes/FakeUserRepository';
import IUserRepository from '../infra/typeorm/IUserRepository';
import AuthenticateUserService from './AuthenticateUserService';
import CreateUserService from './CreateUserService';

let fakeUserRepository: IUserRepository;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe('AuthenticateUser', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    createUser = new CreateUserService(fakeUserRepository);
    authenticateUser = new AuthenticateUserService(fakeUserRepository);
  });

  it('should be able to authenticate an user', async () => {
    const user = await createUser.execute({
      email: 'user@cep.com',
      password: 'senha',
    });

    const response = await authenticateUser.execute({
      email: 'user@cep.com',
      password: 'senha',
    });

    expect(response).toBe(user);
  });
  
  it('should not be able to authenticate an user with wrong password', async () => {
    const user = await createUser.execute({
      email: 'user@cep.com',
      password: 'senha',
    });

    await expect(authenticateUser.execute({
      email: 'user@cep.com',
      password: 'senha1',
    })).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an unexistent user', async () => {
    const user = await createUser.execute({
      email: 'user@cep.com',
      password: 'senha',
    });

    await expect(authenticateUser.execute({
      email: 'user1@cep.com',
      password: 'senha',
    })).rejects.toBeInstanceOf(AppError);
  });
});