import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({collection: 'users'})
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop()
  email: string;

  @Prop()
  mobile: string;

  @Prop({ required: true })
  password: string

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);