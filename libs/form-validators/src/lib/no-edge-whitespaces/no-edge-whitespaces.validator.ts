import { AbstractControl, ValidationErrors } from '@angular/forms';

export const noEdgeWhitespaces = (control: AbstractControl): ValidationErrors | null => {
  const forbidden = /(^\s+)|(\s+$)/.test(control.value);
  return forbidden ? { noEdgeWhitespaces: true } : null;
};
