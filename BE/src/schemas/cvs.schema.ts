import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CVSDocument = CVS & Document;

@Schema({collection: 'cvs'})
export class CVS {
  @Prop({ required: true, unique: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ required: false, default:[] })
  educations: [];

  @Prop({ required: false, default:[] })
  exeperiences: [];

  @Prop({ required: false, default:"" })
  about: string;

  @Prop({ required: false, default:"" })
  dob: string;

  @Prop({ required: false, default:"" })
  highestEdu: string;

  @Prop({ required: false, default:"" })
  location: string;

  @Prop({ default: Date.now() })
  createdAt: Date;

  @Prop({ default: Date.now() })
  updatedAt?: Date;
}

export const CVSSchema = SchemaFactory.createForClass(CVS);