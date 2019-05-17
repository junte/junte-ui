import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { UI } from '../../enum/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './encapsulated.html'
})
export class RadioComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-radio-host';

  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @HostBinding('attr.checked')
  @Input()
  checked = false;

  @Input() label: any;
  @Input() value: string;

  constructor(private element: ElementRef) {
  }

  getElement() {
    return this.element.nativeElement;
  }

}
