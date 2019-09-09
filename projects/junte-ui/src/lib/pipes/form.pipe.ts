import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({name: 'fieldTouchedHasError', pure: false})
export class FieldTouchedHasErrorPipe implements PipeTransform {
  transform(control: AbstractControl, type: string): boolean {
    return control.touched && control.hasError(type);
  }
}
