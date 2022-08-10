import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { CreateUserAppDto } from './dto/create-user-app.dto';
import { UserApp, UserAppDocument } from './schemas/user-app.schema';

@Injectable()
export class UserAppRepository extends EntityRepository<UserAppDocument> {
  constructor(
    @InjectModel(UserApp.name) private userAppModel: Model<UserAppDocument>,
  ) {
    super(userAppModel);
  }

  async createUserApp(appDto: CreateUserAppDto): Promise<UserApp> {
    const userApp = await this.userAppModel.create(appDto);
    await userApp.save();
    return userApp;
  }
}
