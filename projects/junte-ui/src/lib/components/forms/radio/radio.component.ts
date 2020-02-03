import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { Size } from '../../../enums/size';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-radio',
  templateUrl: './radio.encapsulated.html'
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

  @HostBinding('attr.size')
  @Input()
  size: Size = Size.normal;

  @Input() label: any;
  @Input() value: string;

  constructor(private element: ElementRef) {
  }

  getElement() {
    return this.element.nativeElement;
  }

}
