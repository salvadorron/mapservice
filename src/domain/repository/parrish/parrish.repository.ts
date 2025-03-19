import { Prisma } from "@prisma/client";

export default interface ParrishRepository {
    getParrishes(): Promise<Prisma.ParrishGetPayload<null>[]> 
}