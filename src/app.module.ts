import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RegistrosModule } from '@/registros/registros.module';
import { InventarioModule } from '@/inventario/inventario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppMiddleware } from '@/app.middleware';
import { SuppliersModule } from '@/registros/suppliers/suppliers.module';

@Module({
  imports: [
    RegistrosModule,
    InventarioModule,
    MongooseModule.forRoot('mongodb://192.168.3.5:27017/fokin-db'),
    SuppliersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes(':splat*');
  }
}
