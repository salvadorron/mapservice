import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/services/prisma.service';
import { FormController } from '../controllers/form.controller';
import { FormService } from '../services/form.service';
import FormRepositoryImpl from 'src/infrastructure/repositories/form/form.repository';

@Module({
  controllers: [FormController],
  providers: [FormService, FormRepositoryImpl, PrismaService],
  exports: [FormService]
})
export class FormModule {}
