import { Prisma } from "@prisma/client";

export default interface MunicipalityRepository {
    getMunicipalities(): Promise<Prisma.MunicipalityGetPayload<null>[]>
    getMunicipalityById(id: string): Promise<Prisma.MunicipalityGetPayload<null>>
}