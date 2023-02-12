import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export default class EmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}

  async validate(value: any): Promise<boolean> {
    const hasUserEmail = await this.userRepository.searchEmail(value);

    if (hasUserEmail) {
      return false;
    }
    return true;

    // return !hasUserEmail;
  }
}
