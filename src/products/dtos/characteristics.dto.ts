import { IsNotEmpty, IsString } from 'class-validator';

export default class CharacteristicsDTO {
  @IsString()
  @IsNotEmpty({ message: 'Characteristic name cannot be empty' })
  name: string;

  @IsString()
  @IsNotEmpty({ message: 'Characteristic description cannot be empty' })
  description: string;
}
