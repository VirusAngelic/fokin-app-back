import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { RegistrosModule } from '@/registros/registros.module';
import { InventarioModule } from '@/inventario/inventario.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppMiddleware } from '@/app.middleware';
import { SuppliersModule } from '@/registros/suppliers/suppliers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configureEnv } from '@/config/';
import * as process from 'node:process';

@Module({
  imports: [
    RegistrosModule,
    InventarioModule,
    ConfigModule.forRoot({
      load: [configureEnv],
      envFilePath: `${process.cwd()}/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get('database.mongoAddress'),
        };
      },
    }),
    SuppliersModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes(':splat*');
  }
}
