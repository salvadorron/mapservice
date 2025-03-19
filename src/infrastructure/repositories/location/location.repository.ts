import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import LocationRepository from "src/domain/repository/location/location.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class LocationRepositoryImpl implements LocationRepository {
    constructor(private prisma: PrismaService) {}
    async getLocations(): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]> {
        const locations = await this.prisma.location.findMany({ include: { parrish: { include: { municipality: true } } } });
        return locations
    }
}

export default LocationRepositoryImpl