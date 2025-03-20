import { Controller, Get } from '@nestjs/common';
import { FormService } from '../services/form.service';
import FormFilters from 'src/domain/filters/form.filters';

@Controller("form")
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  getForms(filters: FormFilters) {
    return this.formService.getForms(filters);
  }
}
