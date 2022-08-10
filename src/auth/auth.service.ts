import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-github2';
import { AccountService } from 'src/account/account.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/schemas/user.schema';
import { UserService } from 'src/user/user.service';
import { WorkspaceService } from 'src/workspace/workspace.service';
import { FindUserDto } from './dto/find-user.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly accountService: AccountService,
    private readonly workspaceService: WorkspaceService,
    private readonly jwtService: JwtService,
  ) {}

  async getUserByGithubId(findUserDto: FindUserDto): Promise<User> | undefined {
    try {
      const user = this.userService.getUserByGithubId(findUserDto.githubId);
      return user;
    } catch (err) {
      return null;
    }
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  async createJwtToken(jwtPayload: JwtPayload): Promise<string> {
    const token = await this.jwtService.signAsync(jwtPayload);
    return token;
  }

  async signup(profile: Profile): Promise<User> {
    const user = await this.userService.createUser({
      name: profile.displayName,
      githubId: profile.id,
      email: undefined,
      password: undefined,
    });

    const account = await this.accountService.createAccount({
      name: null,
      owner: user,
    });
    const workspace = await this.workspaceService.createWorkspace({
      name: null,
      account: account,
      users: [user],
      owner: user,
    });
    const result = await this.userService.updateAccount(user, account);
    return user;
  }
}
