import { Prisma } from "@prisma/client";
import LocationFilters from "src/domain/filters/location.filters";

export default interface LocationRepository {
    getLocations(filters?: LocationFilters): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]>;
    create(location: Prisma.LocationCreateInput): Promise<void>
    findById(id: number): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>>
    update(location: Prisma.LocationUpdateInput, id: number): Promise<void>
    remove(id: number): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>>
}