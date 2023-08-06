import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class BrandSchema {
  @Prop()
  brand_name: string;

  @Prop({ required: true, unique: true })
  subname: string;

  @Prop()
  description: string;

  @Prop()
  website: string;

  @Prop({ required: true })
  logo: Types.Buffer;
}
