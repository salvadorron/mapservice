import MunicipalityRepositoryImpl from "src/infrastructure/repositories/municipality/municipality.repository";
import { MunicipalityController } from "../controllers/municipality.controller";
import MunicipalityService from "../services/municipality.service";
import { PrismaService } from "src/infrastructure/services/prisma.service";
import { Module } from "@nestjs/common";


@Module({
  controllers: [MunicipalityController],
  providers: [MunicipalityService, MunicipalityRepositoryImpl, PrismaService],
  exports: [MunicipalityService]
})
export class MunicipalityModule {}
