import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import EmailValidator from './validations/email.validator';
import IdValidator from './validations/id.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailValidator, IdValidator],
})
export default class UserModule {}
