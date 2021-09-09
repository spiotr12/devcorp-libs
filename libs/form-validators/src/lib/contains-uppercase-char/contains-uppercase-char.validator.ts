import { AbstractControl, ValidationErrors } from '@angular/forms';

export const containsUppercaseChar = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = !/(?=.*[A-Z])/.test(control.value);
  return forbidden ? { containsUppercaseChar: true } : null;
};
