import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Suppliers,
  SuppliersDocument,
} from '@/registros/suppliers/schema/suppliers.schema';
import { Model } from 'mongoose';
import { AddSupplierDto } from '@/registros/suppliers/dto/add-supplier.dto';
import { SuppliersResponse } from '@shared/response/suppliers.response';

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Suppliers.name)
    private readonly suppliersModel: Model<SuppliersDocument>,
  ) {}

  async createSupplier(
    addSupplierDto: AddSupplierDto,
  ): Promise<SuppliersResponse> {
    const createSupplier = await this.suppliersModel.create(addSupplierDto);
    const bodyResponse: SuppliersResponse = new SuppliersResponse();

    if (createSupplier === null) {
      bodyResponse.status = 500;
      bodyResponse.message = 'Error creating supplier';
      bodyResponse.data = null;
    } else {
      bodyResponse.status = 201;
      bodyResponse.message = 'Supplier created successfully';
      bodyResponse.data = createSupplier.id;
    }

    return bodyResponse;
  }
}
