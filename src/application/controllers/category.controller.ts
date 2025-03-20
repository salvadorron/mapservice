import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import CategoryService from '../services/category.service';
import { Prisma } from '@prisma/client';
import CategoryFilters from 'src/domain/filters/category.filters';

@Controller("category")
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  getCategories(
    @Query() categoryFilters?: CategoryFilters
  ) {
    return this.categoryService.getCategories(categoryFilters);
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
