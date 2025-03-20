import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import FormRepositoryImpl from '../../infrastructure/repositories/form/form.repository';
import FormFilters from 'src/domain/filters/form.filters';

@Injectable()
export class FormService {

  constructor(private readonly formRepository: FormRepositoryImpl) {}

  async getForms(filters?: FormFilters) {
    return this.formRepository.getForms(filters);
  }

}
