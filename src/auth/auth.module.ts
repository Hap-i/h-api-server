import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GithubOauthStrategy } from './strategies/github-oauth.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: 'just-fun',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, GithubOauthStrategy],
})
export class AuthModule {}
