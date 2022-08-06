import { IsNotEmpty } from 'class-validator';

export class FindUserDto {
  @IsNotEmpty()
  githubId: string;
}
