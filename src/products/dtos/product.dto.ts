import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  ValidateNested,
} from 'class-validator';
import { idDecorator } from 'src/users/validations/decorators/id.decorator';
import CharacteristicsDTO from './characteristics.dto';
import ImageDTO from './image.dto';

export default class ProductDTO {
  @IsUUID(undefined, { message: 'Invalid user ID' })
  @idDecorator({ message: `User ID don't already exists` })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Product name cannot be empty' })
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @Min(1, { message: 'Value must be greater than zero' })
  price: number;

  @IsString()
  @IsNotEmpty({ message: 'Product description cannot be empty' })
  @MaxLength(1000, {
    message: 'Description cannot be more than 1000 characters',
  })
  description: string;

  @IsNumber()
  @Min(0, { message: 'Minimum quantity invalid' })
  amountAvailable: number;

  @IsString()
  @IsNotEmpty({ message: 'Product category cannot be empty' })
  category: string;

  @ValidateNested()
  @IsArray()
  @Type(() => CharacteristicsDTO)
  @ArrayMinSize(3)
  characteristics: CharacteristicsDTO[];

  @ValidateNested()
  @IsArray()
  @Type(() => ImageDTO)
  @ArrayMinSize(1)
  images: ImageDTO[];

  @IsString()
  created_at: string;

  @IsString()
  updated_at: string;
}
