import { Injectable } from "@nestjs/common";
import FilledFormRepositoryImpl from "src/infrastructure/repositories/filled_form/filled_form.repository";

@Injectable()
class FilledFormService {

    constructor(private readonly filledFormRepository: FilledFormRepositoryImpl) {}

    async getFilledForms() {
        return this.filledFormRepository.getFilledForms();
    }

}

export default FilledFormService