import { Prisma } from "@prisma/client";

export default interface ParrishRepository {
    getParrishes(): Promise<Prisma.ParrishGetPayload<null>[]> 
    getParrishById(id: string): Promise<Prisma.ParrishGetPayload<null>>
}