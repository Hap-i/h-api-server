import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Account } from 'src/account/schemas/account.schema';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  githubId: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  })
  account: Account;

  @Prop()
  email: string;

  @Prop()
  password: string;
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
