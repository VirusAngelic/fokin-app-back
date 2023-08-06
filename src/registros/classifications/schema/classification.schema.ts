import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, model } from 'mongoose';

export type ClassificationDocument = HydratedDocument<Classification>;

@Schema()
export class Classification {
  @Prop()
  name: string;

  @Prop()
  description: string;
}
export const ClassificationSchema =
  SchemaFactory.createForClass(Classification);
