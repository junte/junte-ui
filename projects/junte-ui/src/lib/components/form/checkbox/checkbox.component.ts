import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-checkbox',
  templateUrl: './encapsulated.html'
})
export class CheckboxComponent {

  @HostBinding('attr.host') readonly host = 'jnt-checkbox-host';

  ui = UI;

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  @Input()
  checked = false;

  @Input() value: any;

  constructor(private element: ElementRef) {
  }

  getElement() {
    return this.element.nativeElement;
  }

}
