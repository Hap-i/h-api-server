import { Injectable } from '@nestjs/common';
import { CreateUserAppDto } from './dto/create-user-app.dto';
import { UserApp } from './schemas/user-app.schema';
import { UserAppRepository } from './user-app.repository';

@Injectable()
export class UserAppService {
  constructor(private readonly userAppRepostitory: UserAppRepository) {}

  async createUserApp(appDto: CreateUserAppDto): Promise<UserApp> {
    return await this.userAppRepostitory.createUserApp(appDto);
  }
}
