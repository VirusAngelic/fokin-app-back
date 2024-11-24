import { Injectable } from '@nestjs/common';
import { AddPaymentMethodDto } from '@/registros/payment-method/dto';
import { InjectModel } from '@nestjs/mongoose';
import {
  PaymentMethod,
  PaymentMethodDocument,
} from '@/registros/payment-method/schema/payment-method.schema';
import { Model } from 'mongoose';
import { PaymentMethodResponse } from '@shared/response';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectModel(PaymentMethod.name)
    private readonly paymentMethodModel: Model<PaymentMethodDocument>,
  ) {}

  /**
   * Create a payment method
   * @param addPaymentMethod
   */
  async createPaymentMethod(addPaymentMethod: AddPaymentMethodDto) {
    const createdPaymentMethod = await this.paymentMethodModel.create(
      addPaymentMethod,
    );
    const bodyResponse = new PaymentMethodResponse();
    if (createdPaymentMethod === null) {
      bodyResponse.message = 'Error creating payment method';
      bodyResponse.data = null;
      bodyResponse.status = 500;
    } else {
      bodyResponse.status = 201;
      bodyResponse.data = createdPaymentMethod.id;
      bodyResponse.message = 'Created payment method successfully';
    }
    return bodyResponse;
  }

  async getAllPaymentMethods() {
    const paymentMethods = await this.paymentMethodModel.find();
    const bodyResponse = new PaymentMethodResponse();
    if (paymentMethods === null) {
      bodyResponse.message = 'Error getting payment methods';
      bodyResponse.data = null;
      bodyResponse.status = 500;
    } else {
      bodyResponse.message = 'Payment methods obtained successfully';
      bodyResponse.data = paymentMethods;
      bodyResponse.status = 200;
    }

    return bodyResponse;
  }

  async deletePaymentMethod(id: string) {
    const deletedPaymentMethod = await this.paymentMethodModel
      .findByIdAndDelete(id)
      .exec();
    const bodyResponse = new PaymentMethodResponse();
    if (deletedPaymentMethod === null) {
      bodyResponse.message = 'Error deleting payment method';
      bodyResponse.data = null;
      bodyResponse.status = 500;
    } else {
    }
    return bodyResponse;
  }
}
