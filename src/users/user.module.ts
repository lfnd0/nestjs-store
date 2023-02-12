import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import EmailValidator from './validations/email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailValidator],
})
export default class UserModule {}
