import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SuppliersDocument = HydratedDocument<Suppliers>;

class PhoneNumbers {
  @Prop()
  number: string;

  @Prop()
  labels: string;
}

@Schema()
export class Suppliers {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop({ type: [PhoneNumbers] })
  numbers: Array<PhoneNumbers>;
}
export const SuppliersSchema = SchemaFactory.createForClass(Suppliers);
