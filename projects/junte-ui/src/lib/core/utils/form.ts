import { FormArray, FormGroup } from '@angular/forms';

export function validate(group: FormGroup | FormArray): boolean {
  for (const i in group.controls) {
    const child = group.controls[i];
    if (child instanceof FormGroup || child instanceof FormArray) {
      validate(child);
    }
    child.markAsDirty();
    child.updateValueAndValidity();
  }
  return group.valid;
}
