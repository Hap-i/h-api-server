import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { AccountService } from 'src/account/account.service';
import { AuthService } from '../auth.service';

@Injectable()
export class GithubOauthStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
    private readonly accountService: AccountService,
  ) {
    super({
      clientID: configService.get('GITHUB_CLIENT_ID'),
      clientSecret: configService.get('GITHUB_CLIENT_SECRET'),
      callbackURL: configService.get('GITHUB_CALLBACK_URL'),
      // scope: ['user'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: Profile,
  ) {
    // 1. find user
    const user = await this.authService.getUserByGithubId({
      githubId: profile.id,
    });
    console.log('user:-', user);
    // 2. if user not found create account
    if (!user) {
      const user = await this.authService.createUser({
        name: profile.displayName,
        githubId: profile.id,
        email: undefined,
        password: undefined,
      });
      const account = await this.accountService.createAccount({
        name: null,
        owner: user,
      });
      return user;
    }
    // 3. return user
    return user;
  }
}
