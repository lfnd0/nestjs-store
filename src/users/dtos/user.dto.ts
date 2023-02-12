import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { emailDecorator } from '../validations/decorators/email.decorator';

export default class UserDTO {
  @IsNotEmpty({
    message: 'Username cannot be empty',
  })
  name: string;

  @IsEmail(undefined, {
    message: 'Username cannot be empty',
  })
  @emailDecorator({ message: 'E-mail already exists' })
  email: string;

  @MinLength(6, {
    message: 'Password less than 6 characters',
  })
  password: string;
}
