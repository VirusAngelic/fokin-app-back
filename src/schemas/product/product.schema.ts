import { Prop, Schema } from '@nestjs/mongoose';
import { ProductProperties } from '../interfaces/properties';
import { Types } from 'mongoose';
import { ClassificationSchema } from '@/registros/classifications/schema/classification.schema';
import { BrandSchema } from '@schemas/brand/brand.schema';

@Schema()
export class ProductSchema {
  @Prop()
  product_name: string;

  @Prop({ required: true, type: [Array<ProductProperties>] })
  properties: Array<ProductProperties>;

  //@Prop({ type: Types.ObjectId, ref: 'ClassificationSchema', required: true })
  //_classificationId: ClassificationSchema;

  @Prop({ type: Types.ObjectId, ref: 'BrandSchema', required: true })
  _brandId: BrandSchema;
}
