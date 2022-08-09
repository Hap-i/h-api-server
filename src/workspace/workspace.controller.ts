import { Body, Controller, Post } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { Workspace } from './schemas/workspace.schema';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async createWorkspace(@Body() body: CreateWorkspaceDto): Promise<Workspace> {
    return this.workspaceService.createWorkspace(body);
  }
}
