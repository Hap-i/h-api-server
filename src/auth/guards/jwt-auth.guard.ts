import { AuthGuard } from '@nestjs/passport';

export class JwtAuthguard extends AuthGuard('jwt') {}
