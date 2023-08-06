import { Injectable } from '@nestjs/common';
import { RegisterSaleDto } from './dto/register-sale.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';

@Injectable()
export class InventarioService {
  create(createInventarioDto: RegisterSaleDto) {
    return 'This action adds a new inventario';
  }

  findAll() {
    return `This action returns all inventario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inventario`;
  }

  update(id: number, updateInventarioDto: UpdateInventarioDto) {
    return `This action updates a #${id} inventario`;
  }

  remove(id: number) {
    return `This action removes a #${id} inventario`;
  }
}
