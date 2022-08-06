import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';
import { AuthService } from '../auth.service';

@Injectable()
export class GithubOauthStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: 'a97faf78d38d361a53ca',
      clientSecret: 'cd88a92a4d8447d766f943128a871dd233c47c51',
      callbackURL: 'http://localhost:3000/auth/github/callback',
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
      return user;
    }
    // 3. return user
    return user;
  }
}
