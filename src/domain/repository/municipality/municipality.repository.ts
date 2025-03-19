import { Prisma } from "@prisma/client";

export default interface MunicipalityRepository {
    getMunicipalities(): Promise<Prisma.MunicipalityGetPayload<null>[]>
}