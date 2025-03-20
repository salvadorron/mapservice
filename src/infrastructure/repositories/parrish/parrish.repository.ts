import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import ParrishRepository from "src/domain/repository/parrish/parrish.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class ParrishRepositoryImpl implements ParrishRepository {
    constructor(private prisma: PrismaService) {}
    async getParrishById(id: string): Promise<Prisma.ParrishGetPayload<null>> {
        const parrish = await this.prisma.parrish.findUnique({ where: { id } });
        return parrish
    }
    
    async getParrishes(): Promise<Prisma.ParrishGetPayload<null>[]> {
        const parrishes = await this.prisma.parrish.findMany();
        return parrishes
    }
    
}

export default ParrishRepositoryImpl