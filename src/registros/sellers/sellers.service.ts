import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Seller,
  SellerDocument,
} from '@/registros/sellers/schema/seller.schema';
import { Model } from 'mongoose';
import { AddSellerDto } from '@/registros/sellers/dto/add-seller.dto';
import { GenericResponseInterface } from '@/shared/response/generic-response.interface';

@Injectable()
export class SellersService {
  constructor(
    @InjectModel(Seller.name)
    private readonly sellerModel: Model<SellerDocument>,
  ) {}

  async createSeller(addSellerDto: AddSellerDto) {
    const createdSeller = await this.sellerModel.create(addSellerDto);
    if (createdSeller === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error creating seller',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    } else {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Seller created successfully',
        data: createdSeller.id,
      };
      bodyResponse.status = 201;
      return bodyResponse;
    }
  }

  async getAllSellers() {
    const sellers = await this.sellerModel.find();
    if (sellers === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error getting sellers',
        data: null,
      };
    } else {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Sellers obtained successfully',
        data: sellers,
      };
      bodyResponse.status = 200;
      return bodyResponse;
    }
  }
}
