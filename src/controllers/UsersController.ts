import { Request, Response } from 'express';

import { User } from '../model/User';
import { connectionSource } from '../model/database/dataSource';

import { CreateUserService } from '../services/users/CreateUserService';
import { ShowUserService } from '../services/users/ShowUserService';

export class UsersController {
  async create(request: Request, response: Response) {
    const { username, email, password } = request.body;

    const userRepository = connectionSource.getRepository(User);
    const createUserService = new CreateUserService(userRepository);

    const user = await createUserService.execute({
      username,
      email,
      password,
    });

    return response.status(200).json(user);
  }

  async show(request: Request, response: Response) {
    const userRepository = connectionSource.getRepository(User);
    const showUserService = new ShowUserService(userRepository);

    const users = await showUserService.execute();

    return response.status(200).json(users);
  }
}
