import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ConfigService } from '@nestjs/config';

const corsConfig = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: ['error', 'warn', 'log', 'debug'] },
  );

  //Getting env variables
  const configService = app.get(ConfigService);

  // Setting up the port and address
  const PORT = configService.get('APP_PORT');
  const ADDRESS = configService.get('APP_ADDRESS');

  //Configuring the cors and listening to the app
  app.enableCors(corsConfig);
  await app.listen(PORT, ADDRESS);
}
bootstrap();
