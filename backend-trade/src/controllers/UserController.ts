import { Request, Response } from "express";
import UserRepository from "../infra/typeorm/repositories/UserRepository";
import CreateUserService from "../services/CreateUserService";

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    
    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    const user = await createUser.execute({ email, password });

    return response.json(user);
  }
}

export default UserController;
