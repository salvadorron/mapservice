import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import CategoryRepository from "src/domain/repository/category/category.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class CategoryRepositoryImpl implements CategoryRepository {
    
    constructor(private prisma: PrismaService) {}
    async update(category: Prisma.CategoryUpdateInput, id: string): Promise<void> {
        await this.prisma.category.update({ data: category, where: { id } });
    }

    async save(category: Prisma.CategoryCreateInput): Promise<void> {
        await this.prisma.category.create({ data: category });
    }
    async remove(id: string): Promise<Prisma.CategoryGetPayload<null>> {
        const category = await this.prisma.category.findUnique({ where: { id } });
        if(!category) throw new Error('category not found');
        await this.prisma.category.delete({ where: { id } });
        return category;
    }
    async getCategoryById(id: string): Promise<Prisma.CategoryGetPayload<null>> {
        return this.prisma.category.findUnique({ where: { id } });
    }

    async getCategories(): Promise<Prisma.CategoryGetPayload<null>[]> {
        return this.prisma.category.findMany();
    }

}

export default CategoryRepositoryImpl