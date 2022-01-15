import { FormGroup, ValidatorFn } from "@angular/forms";

export function requireAtLeastOneCheckBox(minRequired = 1): ValidatorFn {
    return function validate(formGroup: FormGroup) {
        let checked = 0;

        Object.keys(formGroup.controls).forEach((key) => {
            const control = formGroup.controls[key];

            if (control.value === true) {
                checked++;
            }
        });

        if (checked < minRequired) {
            return {
                requireAtLeastOneCheckBox: true,
            };
        }

        return null;
    };
}
