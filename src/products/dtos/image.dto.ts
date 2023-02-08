import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export default class ImageDTO {
  @IsUrl(undefined, { message: 'Invalid image URL' })
  url: string;

  @IsString()
  @IsNotEmpty({ message: 'Image description cannot be empty' })
  description: string;
}
