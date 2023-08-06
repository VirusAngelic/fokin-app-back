import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { RegistrosService } from './registros.service';

@Controller('registros')
export class RegistrosController {
  constructor(private readonly registrosService: RegistrosService) {}
}
