import { AbstractControl, ValidationErrors } from '@angular/forms';

export const containsDigit = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = !/(?=.*\d)/.test(control.value);
  return forbidden ? { containsDigit: true } : null;
};
