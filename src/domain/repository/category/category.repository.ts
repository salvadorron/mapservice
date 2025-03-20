import { Prisma } from "@prisma/client";
import CategoryFilters from "src/domain/filters/category.filters";

export default interface CategoryRepository {
    getCategories(filters?: CategoryFilters): Promise<Prisma.CategoryGetPayload<null>[]>
    getCategoryById(id: string): Promise<Prisma.CategoryGetPayload<null>>
    update(category: Prisma.CategoryUpdateInput, id: string): Promise<void>
    save(category: Prisma.CategoryCreateInput): Promise<void>
    remove(id: string): Promise<Prisma.CategoryGetPayload<null>>
}