import { IsNotEmpty, IsOptional } from 'class-validator';
import { Account } from 'src/account/schemas/account.schema';
import { User } from 'src/user/schemas/user.schema';

export class CreateWorkspaceDto {
  @IsOptional()
  name: string;

  @IsNotEmpty()
  account: Account;

  @IsOptional()
  users: User[];

  @IsNotEmpty()
  owner: User;
}
