import { Injectable } from '@nestjs/common';
import { AddPaymentMethodDto } from '@/registros/payment-method/dto';
import { GenericResponseInterface } from '@/shared/response/generic-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaymentMethod,
  PaymentMethodDocument,
} from '@/registros/payment-method/schema/payment-method.schema';
import { Model } from 'mongoose';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name)
    private readonly paymentMethodModel: Model<PaymentMethodDocument>,
  ) {}

  /**
   * Create a payment method
   * @param addPaymentMethod- DTO with the data to create a payment method
   */
  async createPaymentMethod(addPaymentMethod: AddPaymentMethodDto) {
    const createdPaymentMethod = await this.paymentMethodModel.create(
      addPaymentMethod,
    );
    if (createdPaymentMethod === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error creating payment method',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    }
  }

  async getAllPaymentMethods() {
    const paymentMethods = await this.paymentMethodModel.find();
    if (paymentMethods === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error getting payment methods',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    }
    const bodyResponse: GenericResponseInterface = {
      status: 0,
      message: 'Payment methods obtained successfully',
      data: paymentMethods,
    };
    bodyResponse.status = 200;
    return bodyResponse;
  }

  async deletePaymentMethod(id: string) {
    const deletedPaymentMethod = await this.paymentMethodModel
      .findByIdAndDelete(id)
      .exec();
    if (deletedPaymentMethod === null) {
      const bodyResponse: GenericResponseInterface = {
        status: 0,
        message: 'Error deleting payment method',
        data: null,
      };
      bodyResponse.status = 500;
      return bodyResponse;
    }
  }
}
