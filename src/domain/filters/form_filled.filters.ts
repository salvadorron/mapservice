import { IsNumber, IsString } from "class-validator"

class FormFilledFilters {
    @IsString()
    id: number

    @IsNumber()
    form_id: number
    
    @IsString()
    title: string
}

export default FormFilledFilters