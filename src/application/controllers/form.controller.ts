import { Controller, Get } from '@nestjs/common';
import { FormService } from '../services/form.service';

@Controller("form")
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  getForms() {
    return this.formService.getForms();
  }
}
