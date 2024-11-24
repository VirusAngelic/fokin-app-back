import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { AddSellerDto } from '@/registros/sellers/dto/add-seller.dto';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post('/add')
  addSeller(@Body() addSellerDto: AddSellerDto) {
    return this.sellersService.createSeller(addSellerDto);
  }
  @Get()
  getAllSellers() {
    return this.sellersService.getAllSellers();
  }
  @Delete('/delete')
  removeSeller(@Query('id') id: string) {
    return this.sellersService.deleteSeller(id);
  }
}
