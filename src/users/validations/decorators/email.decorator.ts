import { registerDecorator, ValidationOptions } from 'class-validator';
import EmailValidator from '../email.validator';

export const emailDecorator = (validationOptions: ValidationOptions) => {
  return (obj: Object, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
