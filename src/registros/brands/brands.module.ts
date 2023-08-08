import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsController } from './brands.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Brand, BrandSchema } from '@/registros/brands/schema/brand.schema';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  ],
})
export class BrandsModule {}
