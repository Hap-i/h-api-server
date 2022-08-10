import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserApp, UserAppSchema } from './schemas/user-app.schema';
import { UserAppController } from './user-app.controller';
import { UserAppRepository } from './user-app.repository';
import { UserAppService } from './user-app.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserApp.name, schema: UserAppSchema }]),
  ],
  controllers: [UserAppController],
  providers: [UserAppService, UserAppRepository],
  exports: [UserAppService],
})
export class UserAppModule {}
