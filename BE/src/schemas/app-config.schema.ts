import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppConfigDocument = AppConfig & Document;

@Schema({collection: 'app_configs'})
export class AppConfig {
  @Prop({ required: true })
  name: string;

  @Prop()
  settings: [];

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  updatedAt?: Date;
}

export const AppConfigSchema = SchemaFactory.createForClass(AppConfig);