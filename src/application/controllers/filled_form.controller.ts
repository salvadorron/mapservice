import { Controller, Get } from '@nestjs/common';
import FilledFormService from '../services/filled_form.service';

@Controller("filled_form")
export class FilledFormController {
  constructor(private readonly filledformService: FilledFormService) {}

  @Get()
  getFilledForms() {
    return this.filledformService.getFilledForms();
  }
}
