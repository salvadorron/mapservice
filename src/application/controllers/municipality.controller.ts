import { Controller, Get } from '@nestjs/common';
import MunicipalityService from '../services/municipality.service';

@Controller("municipality")
export class MunicipalityController {
  constructor(private readonly municipalityService: MunicipalityService) {}

  @Get()
  getParrishes() {
    return this.municipalityService.getMunicipalities();
  }
}
