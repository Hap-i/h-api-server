import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/schemas/user.schema';

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true, default: 'New Account' })
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  owner: User;
}
export type AccountDocument = Account & Document;

export const AccountSchema = SchemaFactory.createForClass(Account);
