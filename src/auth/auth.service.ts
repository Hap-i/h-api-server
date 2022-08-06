import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { FindUserDto } from './dto/find-user.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async getUserByGithubId(findUserDto: FindUserDto): Promise<User> {
    return this.userService.getUserByGithubId(findUserDto.githubId);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  async createJwtToken(jwtPayload: JwtPayload): Promise<string> {
    return await this.jwtService.signAsync(jwtPayload);
  }
}
