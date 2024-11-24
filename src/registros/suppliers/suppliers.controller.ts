import { Body, Controller, Post } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { AddSupplierDto } from '@/registros/suppliers/dto/add-supplier.dto';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post('/add')
  addSuppliers(@Body() createSupplierDto: AddSupplierDto) {
    return this.suppliersService.createSupplier(createSupplierDto);
  }
}
