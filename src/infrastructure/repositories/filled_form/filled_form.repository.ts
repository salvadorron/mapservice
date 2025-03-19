import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import FilledFormRepository from "src/domain/repository/filled_form/filled_form.repository";
import { PrismaService } from "src/infrastructure/services/prisma.service";

@Injectable()
class FilledFormRepositoryImpl implements FilledFormRepository {

    constructor(private prisma: PrismaService) {}
    async getFilledForms(): Promise<Prisma.FilledFormGetPayload<null>[]> {
        const filledForms = await this.prisma.filledForm.findMany();
        return filledForms;
    }
    
}

export default FilledFormRepositoryImpl