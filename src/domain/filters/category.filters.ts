import { IsString } from 'class-validator';
class CategoryFilters {
    @IsString()
    id: string

    @IsString()
    name: string

    @IsString()
    icon: string

    @IsString()
    color: string

    @IsString()
    parent_id: string

    @IsString()
    element_type: string
}

export default CategoryFilters