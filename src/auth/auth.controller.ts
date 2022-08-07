import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { User } from 'src/user/schemas/user.schema';
import { AuthService } from './auth.service';
import { GithubOauthGuard } from './guards/github-oauth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Get('github')
  @UseGuards(GithubOauthGuard)
  async github() {
    console.log('inside githhub login');
    return null;
  }

  @Get('github/callback')
  @UseGuards(GithubOauthGuard)
  async githubAuthRedirect(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const user: User = req.user as User;
    const token = await this.authService.createJwtToken({
      githubId: user.githubId,
    });
    res.cookie(this.configService.get('JWT_COOKIE'), token, {
      httpOnly: true,
      secure: false,
    });
    return token;
  }
}
