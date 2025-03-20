import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import LocationFilters from "src/domain/filters/location.filters";
import LocationRepository from "src/domain/repository/location/location.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class LocationRepositoryImpl implements LocationRepository {
    constructor(private prisma: PrismaService) {}
    async create(location: Prisma.LocationCreateInput): Promise<void> {
        await this.prisma.location.create({ data: location })
    }
    async findById(id: number): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } }} }>> {
        const location = await this.prisma.location.findUnique({ where: { id }, include: { parrish: { include: { municipality: true } } } });
        return location
    }

    async update(location: Prisma.LocationCreateInput, id: number): Promise<void> {
        await this.prisma.location.update({ where: { id }, data: location })
    }

    async remove(id: number): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } }} }>> {
        const location = await this.prisma.location.findUnique({ where: { id }, include: { parrish: { include: { municipality: true } } } })
        if(!location) throw new Error('location not found')
        await this.prisma.location.delete({ where: { id } })
        return location

    }
    async getLocations(filters?: LocationFilters): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]> {
        const locations = await this.prisma.location.findMany({ where: { ...filters }, include: { parrish: { include: { municipality: true } } } });
        return locations
    }
}

export default LocationRepositoryImpl