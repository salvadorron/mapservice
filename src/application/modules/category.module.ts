import { Module } from "@nestjs/common";
import { CategoryController } from "../controllers/category.controller";
import CategoryService from "../services/category.service";
import CategoryRepositoryImpl from "src/infrastructure/repositories/category/category.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";



@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepositoryImpl, PrismaService],
  exports: [CategoryService]
})
export class CategoryModule {}
