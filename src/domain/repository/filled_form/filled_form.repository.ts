import { Prisma } from "@prisma/client"

export default interface FilledFormRepository {
    getFilledForms(): Promise<Prisma.FilledFormGetPayload<null>[]>
}