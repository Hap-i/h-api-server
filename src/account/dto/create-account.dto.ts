import { IsNotEmpty, IsOptional } from 'class-validator';
import { User } from 'src/user/schemas/user.schema';

export class CreateAcccountDto {
  @IsOptional()
  name: string;

  @IsOptional()
  owner: User;
}
