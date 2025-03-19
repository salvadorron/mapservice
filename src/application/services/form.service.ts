import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import FormRepositoryImpl from '../../infrastructure/repositories/form/form.repository';

@Injectable()
export class FormService {

  constructor(private readonly formRepository: FormRepositoryImpl) {}

  async getForms() {
    return this.formRepository.getForms();
  }

}
