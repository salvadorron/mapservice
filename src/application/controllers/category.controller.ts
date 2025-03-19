import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import CategoryService from '../services/category.service';
import { Prisma } from '@prisma/client';

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get(':id')
  getCategoryById(
    @Param('id') id: string
  ) {
    return this.categoryService.getCategoryById(id)
  }

  @Patch(':id')
  updateCategory(
    @Param('id') id: string,
    @Body() category: Prisma.CategoryUpdateInput
  ) {
    return this.categoryService.update(category, id);
  }

  @Post()
  async saveCategory(
    @Body() category: Prisma.CategoryCreateInput
  ) {
    await this.categoryService.save(category);
    const createdCategory = await this.categoryService.getCategoryById(category.id.toString());
    return createdCategory
  }

  @Delete('id')
  async removeCategory(
    @Param('id') id: string
  ) {
    const removedCategory = await this.categoryService.remove(id);
    return removedCategory
  }
}
