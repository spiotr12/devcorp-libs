import { AbstractControl, ValidationErrors } from '@angular/forms';

export const noWhitespaces = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = /\s/.test(control.value);
  return forbidden ? { noWhitespaces: true } : null;
};
