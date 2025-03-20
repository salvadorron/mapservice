import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import LocationFilters from 'src/domain/filters/location.filters';
import LocationRepositoryImpl from 'src/infrastructure/repositories/location/location.repository';

@Injectable()
export class LocationService {

  constructor(private readonly locationRepository: LocationRepositoryImpl) {}

  async getLocations(filters?: LocationFilters): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]> {
    return this.locationRepository.getLocations(filters);
  }

}
