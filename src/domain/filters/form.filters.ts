import { IsNumber, IsString } from "class-validator"

class FormFilters {
    @IsNumber()
    id: number

    @IsString()
    category_id: string

    @IsString()
    tag: string
    
    @IsString()
    title: string
}

export default FormFilters
