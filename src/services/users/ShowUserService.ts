import { Repository } from 'typeorm';
import { User } from '../../model/User';

export class ShowUserService {
  constructor(private userRepository: Repository<User>) {
    this.userRepository = userRepository;
  }

  public async execute(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }
}
