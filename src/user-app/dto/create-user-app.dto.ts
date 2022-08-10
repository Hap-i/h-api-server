import { IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { Workspace } from 'src/workspace/schemas/workspace.schema';

export class CreateUserAppDto {
  @IsNotEmpty()
  @MinLength(2)
  name: string;

  @IsOptional()
  description: string;

  @IsNotEmpty()
  workspace: Workspace;
}
