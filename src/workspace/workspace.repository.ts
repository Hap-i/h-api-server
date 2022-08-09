import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/database/entity.repository';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { Workspace, WorkspaceDocument } from './schemas/workspace.schema';

@Injectable()
export class WorkspaceRepository extends EntityRepository<WorkspaceDocument> {
  constructor(
    @InjectModel(Workspace.name)
    private workspaceModel: Model<WorkspaceDocument>,
  ) {
    super(workspaceModel);
  }
  async createWorkspace(workspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    const workspace = await this.workspaceModel.create(workspaceDto);
    await workspace.save();
    return workspace;
  }
}
