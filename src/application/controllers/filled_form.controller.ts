import { Controller, Get } from '@nestjs/common';
import FilledFormService from '../services/filled_form.service';
import FormFilledFilters from 'src/domain/filters/form_filled.filters';

@Controller("filled_form")
export class FilledFormController {
  constructor(private readonly filledformService: FilledFormService) {}

  @Get()
  getFilledForms(filters?: FormFilledFilters) {
    return this.filledformService.getFilledForms(filters);
  }
}
