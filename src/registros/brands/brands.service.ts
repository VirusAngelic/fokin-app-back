import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand, BrandDocument } from '@/registros/brands/schema/brand.schema';
import { Model } from 'mongoose';
import { AddBrandDto } from '@/registros/brands/dto';
import { BrandResponse } from '@shared/response';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<BrandDocument>,
  ) {}

  async createBrand(addBrandDto: AddBrandDto): Promise<BrandResponse> {
    if (addBrandDto.sub_brand.length === 0) {
      addBrandDto.sub_brand = null;
    }
    const createdBrand = await this.brandModel.create(addBrandDto);
    const bodyResponse: BrandResponse = new BrandResponse();
    bodyResponse._brandName = addBrandDto.name;

    if (createdBrand === null) {
      bodyResponse.status = 500;
      bodyResponse.message = 'Error creating brand';
    } else {
      bodyResponse.status = 201;
      bodyResponse.message = 'Brand created successfully';
      bodyResponse.data = createdBrand.id;
    }
    return bodyResponse;
  }

  async getAllBrands(): Promise<BrandResponse> {
    const bodyResponse: BrandResponse = new BrandResponse();
    const brands = await this.brandModel.find();
    if (brands.length === 0) {
      bodyResponse.status = 404;
      bodyResponse.message = 'No brands found';
    } else {
      bodyResponse.status = 200;
      bodyResponse.message = 'Brands found';
      bodyResponse.data = brands;
    }
    return bodyResponse;
  }

  async deleteBrand(id: string): Promise<BrandResponse> {
    const bodyResponse: BrandResponse = new BrandResponse();
    const brand = await this.brandModel.findByIdAndDelete(id);
    if (brand === null) {
      bodyResponse.status = 404;
      bodyResponse.message = 'Brand not found';
    } else {
      bodyResponse.status = 200;
      bodyResponse.message = 'Brand deleted';
      bodyResponse.data = brand;
    }
    return bodyResponse;
  }
}
