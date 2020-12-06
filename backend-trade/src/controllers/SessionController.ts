import { Request, Response } from 'express';
import UserRepository from '../infra/typeorm/repositories/UserRepository';
import AuthenticateUserService from '../services/AuthenticateUserService';

class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const authenticateUser = new AuthenticateUserService(userRepository);

    const user = await authenticateUser.execute({
      email,
      password,
    });

    return response.json(user);
  }
}

export default SessionsController;