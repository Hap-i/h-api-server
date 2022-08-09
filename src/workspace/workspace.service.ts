import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { Workspace } from './schemas/workspace.schema';
import { WorkspaceRepository } from './workspace.repository';

@Injectable()
export class WorkspaceService {
  constructor(private readonly workspaceRepository: WorkspaceRepository) {}
  async createWorkspace(workspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.workspaceRepository.createWorkspace(
      workspaceDto,
    );
    return workspace;
  }
}
