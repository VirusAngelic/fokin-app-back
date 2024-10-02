import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AppMiddleware.name);

  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    this.logger.log('Request --->  ' + req.log.info);
    this.logger.log('Response --->  ' + res.log.info);
    next();
  }
}
