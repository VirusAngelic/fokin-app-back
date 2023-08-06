import { Module } from '@nestjs/common';
import { RegistrosModule } from '@/registros/registros.module';
import { InventarioModule } from '@/inventario/inventario.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RegistrosModule,
    InventarioModule,
    MongooseModule.forRoot('mongodb://192.168.3.5:27017/fokin-db'),
  ],
})
export class AppModule {}
