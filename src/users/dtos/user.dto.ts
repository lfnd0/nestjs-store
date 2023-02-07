import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export default class UserDTO {
  @IsNotEmpty({
    message: 'Username cannot be empty',
  })
  name: string;

  @IsEmail(undefined, {
    message: 'Username cannot be empty',
  })
  email: string;

  @MinLength(6, {
    message: 'Password less than 6 characters',
  })
  password: string;
}
