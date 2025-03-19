import { Injectable } from "@nestjs/common";
import MunicipalityRepositoryImpl from "src/infrastructure/repositories/municipality/municipality.repository";

@Injectable()
class MunicipalityService {
    constructor(private readonly municipalityRepository: MunicipalityRepositoryImpl) {}

    async getMunicipalities() {
        return this.municipalityRepository.getMunicipalities();
    }
}

export default MunicipalityService