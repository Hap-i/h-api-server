import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';
import { User } from './schemas/user.schema';
import { Account } from 'src/account/schemas/account.schema';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create({
      name: createUserDto.name,
      githubId: createUserDto.githubId,
      email: createUserDto.email || 'notavailable@example.com',
    });
  }

  async getUserByGithubId(githubId: string): Promise<User> {
    return await this.userRepository.findOne({ githubId });
  }

  async updateAccount(user, account: Account) {
    return await this.userRepository.updateAccount(user._id, account);
  }
}
