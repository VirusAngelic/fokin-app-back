import { Module } from '@nestjs/common';
import { RegistrosService } from './registros.service';
import { RegistrosController } from './registros.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Classification,
  ClassificationSchema,
} from '@/registros/classifications/schema/classification.schema';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { ClassificationsModule } from './classifications/classifications.module';
import { SellersModule } from './sellers/sellers.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Classification.name, schema: ClassificationSchema },
    ]),
    PaymentMethodModule,
    ClassificationsModule,
    SellersModule,
    BrandsModule,
  ],
  controllers: [RegistrosController],
  providers: [RegistrosService],
})
export class RegistrosModule {}
