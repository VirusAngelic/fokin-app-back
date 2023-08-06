import { PartialType } from '@nestjs/mapped-types';
import { RegisterSaleDto } from './register-sale.dto';

export class UpdateInventarioDto extends PartialType(RegisterSaleDto) {}
