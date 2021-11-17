import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StuffDocument = Stuff & Document;

@Schema()
export class Stuff {
  @Prop()
  eids: string[];
}

export const StuffSchema = SchemaFactory.createForClass(Stuff);
