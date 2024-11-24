import { IsString } from 'class-validator';

export class AddSupplierDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  phoneNumbers: PhoneNumbers;
}

class PhoneNumbers {
  @IsString()
  number: string;

  @IsString()
  labels: string;
}
