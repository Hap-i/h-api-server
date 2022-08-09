import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Account } from 'src/account/schemas/account.schema';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class Workspace {
  @Prop({ default: 'My Workspace' })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  account: Account;

  // many to many relation in user
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  })
  users: User[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;
}

export type WorkspaceDocument = Workspace & Document;
export const WorkspaceSchema = SchemaFactory.createForClass(Workspace);
