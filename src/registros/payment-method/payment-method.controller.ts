import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { PaymentMethodService } from './payment-method.service';
import { AddPaymentMethodDto } from '@/registros/payment-method/dto';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post('/add')
  addPayment(@Body() createPaymentMethod: AddPaymentMethodDto) {
    return this.paymentMethodService.createPaymentMethod(createPaymentMethod);
  }

  @Get()
  getAllPayment() {
    return this.paymentMethodService.getAllPaymentMethods();
  }

  @Delete('/delete')
  removePayment(@Query('id') id: string) {
    return this.paymentMethodService.deletePaymentMethod(id);
  }
}
