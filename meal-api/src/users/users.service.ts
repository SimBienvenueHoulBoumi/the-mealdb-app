import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(username: string, password: string): Promise<User> {
    const newUser = this.userRepository.create({
      username,
      password,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return this.userRepository.save(newUser);
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { username },
    });
  }
}
