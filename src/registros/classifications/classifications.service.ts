import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Classification,
  ClassificationDocument,
} from '@/registros/classifications/schema/classification.schema';
import { Model } from 'mongoose';
import { AddClassificationDto } from '@/registros/classifications/dto';
import { ClassificationResponse } from '@shared/response/classification.response';

@Injectable()
export class ClassificationsService {
  constructor(
    @InjectModel(Classification.name)
    private readonly classificationModel: Model<ClassificationDocument>,
  ) {}

  async createClassification(addClassificationDto: AddClassificationDto) {
    const createdClassification = await this.classificationModel.create(
      addClassificationDto,
    );
    const bodyResponse: ClassificationResponse = new ClassificationResponse();
    if (createdClassification === null) {
      bodyResponse.status = 500;
      bodyResponse.message = 'Error creating classification';
      bodyResponse.data = null;
      return bodyResponse;
    } else {
      bodyResponse.status = 201;
      bodyResponse.message = 'Classification created successfully';
      bodyResponse.data = createdClassification.id;
    }
    return bodyResponse;
  }

  async getAllClassifications() {
    const classifications = await this.classificationModel.find({}, '-__v');
    const bodyResponse: ClassificationResponse = new ClassificationResponse();

    if (classifications === null) {
      bodyResponse.message = 'Error getting classifications';
      bodyResponse.data = null;
      bodyResponse.status = 500;
    } else {
      bodyResponse.message = 'Classifications obtained successfully';
      bodyResponse.data = classifications;
      bodyResponse.status = 200;
    }
    return bodyResponse;
  }

  async deleteClassification(id: string) {
    const deletedClassification = await this.classificationModel
      .findByIdAndRemove(id)
      .exec();
    const bodyResponse: ClassificationResponse = new ClassificationResponse();
    if (deletedClassification === null) {
      bodyResponse.message = 'Error al borrar la clasificación';
      bodyResponse.data = null;
      bodyResponse.status = 404;
    } else {
      bodyResponse.status = 200;
      bodyResponse.message = 'Clasificacion eliminada exitosamente';
      bodyResponse.data = deletedClassification;
    }

    return bodyResponse;
  }
}
