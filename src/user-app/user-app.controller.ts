import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthguard } from 'src/auth/guards/jwt-auth.guard';
import { CreateUserAppDto } from './dto/create-user-app.dto';
import { UserApp } from './schemas/user-app.schema';
import { UserAppService } from './user-app.service';

@Controller('user-app')
export class UserAppController {
  constructor(private readonly userAppService: UserAppService) {}

  @Post()
  @UseGuards(JwtAuthguard)
  async createUserApp(@Body() body: CreateUserAppDto): Promise<UserApp> {
    return await this.userAppService.createUserApp(body);
  }
}
