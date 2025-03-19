
import { Module } from "@nestjs/common";
import { FilledFormController } from "../controllers/filled_form.controller";
import FilledFormService from "../services/filled_form.service";
import FilledFormRepositoryImpl from "src/infrastructure/repositories/filled_form/filled_form.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";


@Module({
  controllers: [FilledFormController],
  providers: [FilledFormService, FilledFormRepositoryImpl, PrismaService],
  exports: [FilledFormService],
})
export class FilledFormModule {}
