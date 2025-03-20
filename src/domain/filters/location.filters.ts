import { IsNumber, IsString } from "class-validator"

class LocationFilters {
    @IsNumber()
    id: number

    @IsString()
    parrishId: string
    
    @IsString()
    shapetype: string
}

export default LocationFilters