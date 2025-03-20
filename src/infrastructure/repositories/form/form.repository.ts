import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import FormFilters from "src/domain/filters/form.filters";
import FormRepository from "src/domain/repository/form/form.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class FormRepositoryImpl implements FormRepository {
    constructor(private prisma: PrismaService) {}
    async save(form: Prisma.FormCreateInput): Promise<void> {
        await this.prisma.form.create({ data: form });
    }
    async remove(id: number): Promise<void> {
        await this.prisma.form.delete({ where: { id } });
    }
    
    async getForms(filters?: FormFilters): Promise<Prisma.FormGetPayload<null>[]> {
        const forms = await this.prisma.form.findMany({ where: { ...filters } });
        return forms
    }
}

export default FormRepositoryImpl