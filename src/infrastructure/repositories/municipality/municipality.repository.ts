import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import MunicipalityRepository from "src/domain/repository/municipality/municipality.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class MunicipalityRepositoryImpl  implements MunicipalityRepository {
    
    constructor(private prisma: PrismaService) {}

    async getMunicipalities(): Promise<Prisma.MunicipalityGetPayload<null>[]> {
        const municipalities = await this.prisma.municipality.findMany();
        return municipalities
    }
    
}

export default MunicipalityRepositoryImpl