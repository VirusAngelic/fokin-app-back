import { IsString, IsUrl } from 'class-validator';

export class AddBrandDto {
  @IsString()
  description: string;

  @IsString()
  name: string;

  @IsString()
  sub_brand: string;

  @IsUrl()
  website: string;
}
