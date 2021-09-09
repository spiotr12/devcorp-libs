import { AbstractControl, ValidationErrors } from '@angular/forms';

export const containsSpecialChar = (control: AbstractControl): ValidationErrors | null => {
  // TODO: Put special chars to an variable
  const forbidden = !/(?=.*[@!$%&-*\/+=_<>\[\]()])/.test(control.value);
  return forbidden ? { containsSpecialChar: true } : null;
};
