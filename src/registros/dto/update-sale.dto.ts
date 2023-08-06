import { PartialType } from '@nestjs/mapped-types';
import { RegisterSaleDto } from './register-sale.dto';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class UpdateSaleDto extends PartialType(RegisterSaleDto) {
  // sale unique identifier
  @IsString()
  readonly _saleId: string;

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
