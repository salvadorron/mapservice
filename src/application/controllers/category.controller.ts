import { Controller, Get } from '@nestjs/common';
import CategoryService from '../services/category.service';

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getFilledForms() {
    return this.categoryService.getCategories();
  }
}
