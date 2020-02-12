import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'jnt-form-label',
  templateUrl: './form-label.encapsulated.html'
})
export class FormLabelComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-label-host';

  @HostBinding('attr.for')
  @Input()
  for: string;

}
