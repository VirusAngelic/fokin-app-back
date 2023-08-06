import { IsString } from 'class-validator';

export class AddPaymentMethodDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
