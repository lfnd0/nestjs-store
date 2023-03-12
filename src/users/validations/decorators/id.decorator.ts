import { registerDecorator, ValidationOptions } from 'class-validator';
import IdValidator from '../id.validator';

export const idDecorator = (validationOptions: ValidationOptions) => {
  return (obj: Object, props: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: props,
      options: validationOptions,
      constraints: [],
      validator: IdValidator,
    });
  };
};
