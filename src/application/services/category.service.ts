import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import CategoryRepositoryImpl from "src/infrastructure/repositories/category/category.repository";

@Injectable()
class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

    async getCategories() {
        return this.categoryRepository.getCategories();
    }

    async getCategoryById(id: string) {
        return this.categoryRepository.getCategoryById(id);
    }

    async update(category: Prisma.CategoryUpdateInput, id: string) {
        await this.categoryRepository.update(category, id);
    }

    async save(category: Prisma.CategoryCreateInput) {
        await this.categoryRepository.save(category);
    }

    async remove(id: string) {
        const removedCategory = await this.categoryRepository.remove(id);
        return removedCategory
    }
}

export default CategoryService