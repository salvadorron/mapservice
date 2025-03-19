import { Injectable } from "@nestjs/common";
import CategoryRepositoryImpl from "src/infrastructure/repositories/category/category.repository";

@Injectable()
class CategoryService {
    constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

    async getCategories() {
        return this.categoryRepository.getCategories();
    }
}

export default CategoryService