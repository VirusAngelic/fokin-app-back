import { IsDate, IsNumber, IsString, IsArray } from 'class-validator';

export class RegisterSaleDto {
  // product unique identifier
  @IsArray({ each: true })
  readonly _productId: Array<string>;

  // customer unique identifier
  @IsString()
  readonly _customerId: string;

  // payment method unique identifier
  @IsString()
  readonly _paymentMethodId: string;

  // seller unique identifier
  @IsString()
  readonly _sellerId: string;

  // sale date
  @IsDate()
  readonly saleDate: Date;

  // sale quantity
  @IsNumber()
  readonly saleQuantity: number;

  // sale total price
  @IsNumber()
  readonly salePrice: number;

  // sale status for tracking
  @IsString()
  readonly saleStatus: string;

  // seller comment about the sale
  @IsString()
  readonly saleObservation: string;
}
