import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import LocationRepositoryImpl from 'src/infrastructure/repositories/location/location.repository';

@Injectable()
export class LocationService {

  constructor(private readonly locationRepository: LocationRepositoryImpl) {}

  async getLocations(): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]> {
    return this.locationRepository.getLocations();
  }

}
