import { Controller, Get } from '@nestjs/common';
import { LocationService } from '../services/location.service';
import LocationFilters from 'src/domain/filters/location.filters';

@Controller("location")
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  getLocations(filters?: LocationFilters) {
    return this.locationService.getLocations(filters);
  }
}
