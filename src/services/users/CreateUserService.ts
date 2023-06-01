import { Repository } from 'typeorm';
import { hash } from 'bcryptjs';

import { User } from '../../model/User';
import { IUserCreateDTO } from '../../dtos/IUserCreateDTO';

export class CreateUserService {
  constructor(private userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  public async execute(data: IUserCreateDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findOne({
      where: [{ email: data.email }, { username: data.username }],
    });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await hash(data.password, 8);

    const user = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });

    await this.userRepository.save(user);

    return user;
  }
}
