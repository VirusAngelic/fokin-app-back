import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SellerDocument = HydratedDocument<Seller>;
@Schema()
export class Seller {
  @Prop()
  nombre: string;

  @Prop()
  apellido_paterno: string;

  @Prop()
  apellido_materno: string;

  @Prop()
  telefono: string;

  @Prop()
  curp: string;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);
