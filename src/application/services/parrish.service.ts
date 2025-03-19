import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import ParrishRepositoryImpl from "src/infrastructure/repositories/parrish/parrish.repository";

@Injectable()
class ParrishService {

    constructor(private readonly parrishRepository: ParrishRepositoryImpl) {}

    getParrishes(): Promise<Prisma.ParrishGetPayload<null>[]> {
        return this.parrishRepository.getParrishes()
    }

}

export default ParrishService