import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import FormFilledFilters from "src/domain/filters/form_filled.filters";
import FilledFormRepository from "src/domain/repository/filled_form/filled_form.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class FilledFormRepositoryImpl implements FilledFormRepository {

    constructor(private prisma: PrismaService) {}
    async save(filledForm: Prisma.FilledFormCreateInput): Promise<void> {
        await this.prisma.filledForm.create({ data: filledForm })
    }
    async remove(id: number): Promise<Prisma.FilledFormGetPayload<null>> {
        const filledForm = await this.prisma.filledForm.findUnique({ where: { id } });
        if(!filledForm) throw new Error('FilledForm not found');
        await this.prisma.filledForm.delete({ where: { id } })
        return filledForm
    }
    async getFilledForms(filters?: FormFilledFilters): Promise<Prisma.FilledFormGetPayload<null>[]> {
        const filledForms = await this.prisma.filledForm.findMany({ where: { ...filters } });
        return filledForms;
    }
    
}

export default FilledFormRepositoryImpl