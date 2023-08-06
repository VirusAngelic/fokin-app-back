import { Module } from '@nestjs/common';
import { ClassificationsService } from './classifications.service';
import { ClassificationsController } from './classifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Classification,
  ClassificationSchema,
} from '@/registros/classifications/schema/classification.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Classification.name,
        schema: ClassificationSchema,
      },
    ]),
  ],
  controllers: [ClassificationsController],
  providers: [ClassificationsService],
})
export class ClassificationsModule {}
