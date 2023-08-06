import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { ClassificationsService } from './classifications.service';
import { AddClassificationDto } from '@/registros/classifications/dto';
import { GenericResponseInterface } from '@/shared/response/generic-response.interface';

@Controller('classifications')
export class ClassificationsController {
  constructor(
    private readonly classificationsService: ClassificationsService,
  ) {}

  @Post('/add')
  addClassification(@Body() createclassificationDto: AddClassificationDto) {
    return this.classificationsService.createClassification(
      createclassificationDto,
    );
  }

  @Get()
  getAllClassification() {
    return this.classificationsService.getAllClassifications();
  }

  @Delete('/delete')
  removeClassification(
    @Query('id') id: string,
  ): Promise<GenericResponseInterface> {
    return this.classificationsService.deleteClassification(id);
  }
}
