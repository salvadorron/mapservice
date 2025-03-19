import { Module } from '@nestjs/common';
import { LocationController } from '../controllers/location.controller';
import { LocationService } from '../services/location.service';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import LocationRepositoryImpl from 'src/infrastructure/repositories/location/location.repository';

@Module({
  controllers: [LocationController],
  providers: [LocationService, LocationRepositoryImpl, PrismaService],
  exports: [LocationService]
})
export class LocationModule {}
