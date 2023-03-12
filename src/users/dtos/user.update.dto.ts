import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { emailDecorator } from '../validations/decorators/email.decorator';

export default class UserUpdate {
  @IsNotEmpty({
    message: 'Username cannot be empty',
  })
  @IsOptional()
  name: string;

  @IsEmail(undefined, {
    message: 'Username cannot be empty',
  })
  @IsOptional()
  @emailDecorator({ message: 'E-mail already exists' })
  email: string;

  @MinLength(6, {
    message: 'Password less than 6 characters',
  })
  @IsOptional()
  password: string;
}
