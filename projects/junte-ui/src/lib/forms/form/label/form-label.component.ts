import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroupName } from '@angular/forms';
import { PropertyApi } from '../../../core/decorators/api';

@Component({
  selector: 'jnt-form-label',
  templateUrl: './form-label.encapsulated.html'
})
export class FormLabelComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-form-label-host';

  required = false;

  @PropertyApi({
    description: 'The identifier of the item to associate with',
    type: 'string',
  })
  @Input()
  for: string;

  constructor(private parent: ControlContainer) {
  }

  ngOnInit() {
    const control = (<FormGroupName>this.parent).control.get(this.for);
    if (!!control) {
      control.statusChanges.subscribe(() => this.check(control));
      this.check(control)
    }
  }

  check(control: AbstractControl) {
    if (!!control.validator && !!control.validator(<AbstractControl>{})) {
      this.required = control.validator(<AbstractControl>{}).required;
    } else {
      this.required = false;
    }
  }
}
