import * as process from 'node:process';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { join } from 'path';

export const configureEnv = () => ({
  port: parseInt(process.env.APP_PORT, 10),
  address: process.env.APP_ADDRESS,
  database: {
    mongoAddress: process.env.DATABASE_ADDRESS,
    mongoPort: parseInt(process.env.DATABASE_PORT, 10),
  },
});
