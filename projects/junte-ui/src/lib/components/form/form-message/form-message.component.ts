import { Component, HostBinding, Input } from '@angular/core';
import { ValidationTypeError } from '../../../enum/ui';

@Component({
  selector: 'jnt-form-message',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class FormMessageComponent {

  @HostBinding('attr.host') readonly host = 'jnt-form-message-host';

  show = false;

  @HostBinding('style.display')
  get style() {
    return !!this.show ? 'inline-block' : 'none';
  }

  @Input()
  type: ValidationTypeError = null;

}
