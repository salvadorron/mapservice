import ParrishRepositoryImpl from "src/infrastructure/repositories/parrish/parrish.repository";
import { ParrishController } from "../controllers/parrish.controller";
import ParrishService from "../services/parrish.service";
import { PrismaService } from "src/infrastructure/services/prisma.service";
import { Module } from "@nestjs/common";



@Module({
  controllers: [ParrishController],
  providers: [ParrishService, ParrishRepositoryImpl, PrismaService],
  exports: [ParrishService]
})
export class ParrishModule {}
