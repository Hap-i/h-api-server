import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { AppColor } from 'src/enums/app-color.enum';
import { Workspace } from 'src/workspace/schemas/workspace.schema';

@Schema({ timestamps: true })
export class UserApp {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: AppColor.YELLOW })
  color: AppColor;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
  })
  workspace: Workspace;
}

export type UserAppDocument = UserApp & Document;
export const UserAppSchema = SchemaFactory.createForClass(UserApp);
