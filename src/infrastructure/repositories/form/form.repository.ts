import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import FormRepository from "src/domain/repository/form/form.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class FormRepositoryImpl implements FormRepository {
    constructor(private prisma: PrismaService) {}
    
    async getForms(): Promise<Prisma.FormGetPayload<null>[]> {
        const forms = await this.prisma.form.findMany();
        return forms
    }
}

export default FormRepositoryImpl