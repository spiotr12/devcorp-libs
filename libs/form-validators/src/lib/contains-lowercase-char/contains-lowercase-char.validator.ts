import { AbstractControl, ValidationErrors } from '@angular/forms';

export const containsLowercaseChar = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = !/(?=.*[a-z])/.test(control.value);
  return forbidden ? { containsLowercaseChar: true } : null;
};
