import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import CategoryRepository from "src/domain/repository/category/category.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class CategoryRepositoryImpl implements CategoryRepository {
    
    constructor(private prisma: PrismaService) {}

    async getCategories(): Promise<Prisma.CategoryGetPayload<null>[]> {
        return this.prisma.category.findMany();
    }

}

export default CategoryRepositoryImpl