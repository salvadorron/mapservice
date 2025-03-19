import { Prisma } from "@prisma/client";

export default interface FormRepository {
    getForms(): Promise<Prisma.FormGetPayload<null>[]>
}