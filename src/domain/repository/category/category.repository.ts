import { Prisma } from "@prisma/client";

export default interface CategoryRepository {
    getCategories(): Promise<Prisma.CategoryGetPayload<null>[]>
}