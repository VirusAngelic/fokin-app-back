import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Classification,
  ClassificationDocument,
} from '@/registros/classifications/schema/classification.schema';
import { Model } from 'mongoose';
import { AddClassificationDto } from '@/registros/classifications/dto';
import { GenericResponseInterface } from '@/shared/response/generic-response.interface';

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
    if (createdClassification === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error creating classification',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    }
    const bodyResponse: GenericResponseInterface = {
      status: 0,
      message: 'Classification created successfully',
      data: createdClassification.id,
    };
    bodyResponse.status = 201;
    return bodyResponse;
  }

  async getAllClassifications() {
    const classifications = await this.classificationModel.find();
    if (classifications === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error getting classifications',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    }
    const bodyResponse: GenericResponseInterface = {
      status: 0,
      message: 'Classifications obtained successfully',
      data: classifications,
    };
    bodyResponse.status = 200;
    return bodyResponse;
  }

  async deleteClassification(id: string) {
    const deletedClassification = await this.classificationModel
      .findByIdAndRemove(id)
      .exec();
    console.log(deletedClassification);
    console.log(id);
    if (deletedClassification === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error al borrar la clasificación',
        data: 'not found',
      };
      bodyResponse.status = 404;
      return bodyResponse;
    }
    const bodyResponse: GenericResponseInterface = {
      status: 0,
      message: 'Clasificacion eliminada exitosamente',
      data: deletedClassification,
    };
    bodyResponse.status = 200;
    return bodyResponse;
  }
}
