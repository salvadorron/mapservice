import { Injectable } from "@nestjs/common";
import FormFilledFilters from "src/domain/filters/form_filled.filters";
import FilledFormRepositoryImpl from "src/infrastructure/repositories/filled_form/filled_form.repository";

@Injectable()
class FilledFormService {

    constructor(private readonly filledFormRepository: FilledFormRepositoryImpl) {}


    async getFilledForms(filters?: FormFilledFilters) {
        return this.filledFormRepository.getFilledForms(filters);
    }

}

export default FilledFormService