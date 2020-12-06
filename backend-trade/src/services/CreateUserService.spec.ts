import FakeUserRepository from '../infra/typeorm/fakes/FakeUserRepository';
import IUserRepository from '../infra/typeorm/IUserRepository';
import CreateUserService from './CreateUserService';

let fakeUserRepository: IUserRepository;
let createUser: CreateUserService;

describe('User', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUserRepository();
    createUser = new CreateUserService(fakeUserRepository);
  });

  it('should be able to create a new user with hashed password', async () => {
    const user = await createUser.execute({
      email: 'user1@gotham.com',
      password: 'user',
    });

    expect(user).toHaveProperty('id');
    expect(user.email).toBe('user1@gotham.com');
    expect(user.password).not.toBe('user');
  });
})