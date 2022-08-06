import { Module } from '@nestjs/common';
import { UserAppModule } from './user-app/user-app.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/h-api-server'),
    UserAppModule,
    WorkspaceModule,
    UserModule,
    AccountModule,
    AuthModule,
  ],
})
export class AppModule {}
