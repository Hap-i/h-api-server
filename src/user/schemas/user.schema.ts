import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  githubId: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}
export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
