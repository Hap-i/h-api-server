import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAppModule } from './user-app/user-app.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserAppModule, WorkspaceModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
