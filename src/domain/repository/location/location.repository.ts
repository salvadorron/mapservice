import { Prisma } from "@prisma/client";

export default interface LocationRepository {
    getLocations(): Promise<Prisma.LocationGetPayload<{ include: { parrish: { include: { municipality: true } } } }>[]>;
}