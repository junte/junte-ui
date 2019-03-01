import { Component, HostBinding, Input } from '@angular/core';
import { ValidationTypeError } from '../../../enum/ui';

@Component({
  selector: 'jnt-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent {

  show = false;

  @HostBinding('style.display')
  get style() {
    return !!this.show ? 'inline-block' : 'none';
  }

  @Input()
  type: ValidationTypeError = null;

}
