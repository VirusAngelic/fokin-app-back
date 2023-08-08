import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { AddBrandDto } from '@/registros/brands/dto';
import { BrandResponse } from '@shared/response';

@Controller('brands')
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}

  @Post('/add')
  addBrand(@Body() addBrandDto: AddBrandDto): Promise<BrandResponse> {
    return this.brandsService.createBrand(addBrandDto);
  }

  @Get()
  getAllBrands(): Promise<BrandResponse> {
    return this.brandsService.getAllBrands();
  }

  @Delete('/delete')
  removeBrand(@Body('id') id: string): Promise<BrandResponse> {
    return this.brandsService.deleteBrand(id);
  }
}
