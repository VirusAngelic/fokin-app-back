import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Seller,
  SellerDocument,
} from '@/registros/sellers/schema/seller.schema';
import { Model } from 'mongoose';
import { AddSellerDto } from '@/registros/sellers/dto/add-seller.dto';
import { SellerResponse } from '@/shared/response/seller.response';

@Injectable()
export class SellersService {
  constructor(
    @InjectModel(Seller.name)
    private readonly sellerModel: Model<SellerDocument>,
  ) {}

  async createSeller(addSellerDto: AddSellerDto) {
    const createdSeller = await this.sellerModel.create(addSellerDto);
    const responseBody: SellerResponse = new SellerResponse();
    if (createdSeller === null) {
      responseBody.status = 500;
      responseBody.message = 'Error creating seller';
      responseBody.data = null;
    } else {
      responseBody.status = 201;
      responseBody.message = 'Seller created successfully';
    }
    responseBody._sellerName! = createdSeller.id;
    return responseBody;
  }

  async getAllSellers(): Promise<SellerResponse> {
    const responseBody: SellerResponse = new SellerResponse();
    const sellers = await this.sellerModel.find();
    responseBody.message = 'Sellers obtained successfully';
    responseBody.data = sellers;
    if (sellers === null) {
      responseBody.status = 500;
    } else {
      responseBody.status = 200;
    }
    return responseBody;
  }

  async deleteSeller(id: string): Promise<SellerResponse> {
    const deletedSeller = await this.sellerModel.findByIdAndDelete(id);
    const bodyResponse: SellerResponse = new SellerResponse();
    bodyResponse._sellerName = id;
    if (deletedSeller === null) {
      bodyResponse.status = 500;
      bodyResponse.message = 'Error deleting seller';
      bodyResponse.data = null;
    } else {
      bodyResponse.message = 'Seller deleted successfully';
      bodyResponse.status = 200;
    }
    return bodyResponse;
  }
}
