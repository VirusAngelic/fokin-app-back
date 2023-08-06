import { IsString } from 'class-validator';

export class AddClassificationDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
