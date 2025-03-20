import { Prisma } from "@prisma/client";
import FormFilters from "src/domain/filters/form.filters";

export default interface FormRepository {
    getForms(filters?: FormFilters): Promise<Prisma.FormGetPayload<null>[]>
    save(form: Prisma.FormCreateInput): Promise<void>
    remove(id: number): Promise<void>
}