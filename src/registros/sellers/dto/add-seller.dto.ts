import { IsString } from 'class-validator';

export class AddSellerDto {
  @IsString()
  nombre: string;

  @IsString()
  apellidoPaterno: string;

  @IsString()
  apellidoMaterno: string;

  @IsString()
  telefono: string;

  @IsString()
  curp: string;
}
