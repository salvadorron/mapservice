import { Controller, Get } from '@nestjs/common';
import ParrishService from '../services/parrish.service';

@Controller("parrish")
export class ParrishController {
  constructor(private readonly parrishService: ParrishService) {}

  @Get()
  getParrishes() {
    return this.parrishService.getParrishes();
  }
}
