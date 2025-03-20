import { Prisma } from "@prisma/client"
import FormFilledFilters from "src/domain/filters/form_filled.filters"

export default interface FilledFormRepository {
    getFilledForms(filters?: FormFilledFilters): Promise<Prisma.FilledFormGetPayload<null>[]>
    save(filledForm: Prisma.FilledFormCreateInput): Promise<void>
    remove(id: number): Promise<Prisma.FilledFormGetPayload<null>>
}