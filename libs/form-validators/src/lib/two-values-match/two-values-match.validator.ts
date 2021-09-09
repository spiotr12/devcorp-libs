import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const twoValuesMatch = (firstControlPath: string, secondControlPath: string,
                               options: {
                                 attachErrorTo?: 'control' | 'first' | 'second' | 'all' | 'both' | 'none'
                               } = { attachErrorTo: 'control' }): ValidatorFn =>
  (control: AbstractControl) => {
    const firstControl: AbstractControl | null = control.get(firstControlPath);
    const secondControl: AbstractControl | null = control.get(secondControlPath);

    if (!firstControl) {
      throw new Error(`Could not find controls ${firstControlPath}`);
    }

    if (!secondControl) {
      throw new Error(`Could not find controls: ${secondControlPath}`);
    }

    const valuesMatch: boolean = firstControl.value === secondControl.value;
    const error: ValidationErrors | null = !valuesMatch ? {
      twoValuesMatch: { firstActualValue: firstControl.value, secondActualValue: secondControl.value },
    } : null;

    if (options.attachErrorTo === 'control') {
      control.setErrors(error);
    } else if (options.attachErrorTo === 'first') {
      firstControl.setErrors(error);
    } else if (options.attachErrorTo === 'second') {
      secondControl.setErrors(error);
    } else if (options.attachErrorTo === 'all') {
      control.setErrors(error);
      firstControl.setErrors(error);
      secondControl.setErrors(error);
    } else if (options.attachErrorTo === 'both') {
      firstControl.setErrors(error);
      secondControl.setErrors(error);
    }

    return error;
  };
