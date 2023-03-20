import { Type } from "class-transformer";
import { IsUUID, IsString, IsNotEmpty, IsNumber, Min, MaxLength, ValidateNested, IsArray, ArrayMinSize, IsOptional } from "class-validator";
import { idDecorator } from "src/users/validations/decorators/id.decorator";
import CharacteristicsDTO from "./characteristics.dto";
import ImageDTO from "./image.dto";

export class ProductUpdate {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Product name cannot be empty' })
    name: string;

    @IsOptional()
    @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
    @Min(1, { message: 'Value must be greater than zero' })
    price: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Product description cannot be empty' })
    @MaxLength(1000, {
        message: 'Description cannot be more than 1000 characters',
    })
    description: string;
    
    @IsOptional()
    @IsNumber()
    @Min(0, { message: 'Minimum quantity invalid' })
    amountAvailable: number;
    @IsOptional()

    @IsString()
    @IsNotEmpty({ message: 'Product category cannot be empty' })
    category: string;
    
    @IsOptional()
    @ValidateNested()
    @IsArray()
    @Type(() => CharacteristicsDTO)
    @ArrayMinSize(3)
    characteristics: CharacteristicsDTO[];
    
    @IsOptional()
    @ValidateNested()
    @IsArray()
    @Type(() => ImageDTO)
    @ArrayMinSize(1)
    images: ImageDTO[];
    
    @IsOptional()
    @IsString()
    created_at: string;
    
    @IsOptional()
    @IsString()
    updated_at: string;
}
