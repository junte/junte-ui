import { Component, HostBinding, Input } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Scheme } from '../../core/enums/scheme';

@Component({
  selector: 'jnt-message',
  templateUrl: './message.encapsulated.html'
})
export class MessageComponent {

  @HostBinding('attr.host') readonly host = 'jnt-message-host';

  @HostBinding('attr.scheme')
  _scheme = Scheme.primary;

  @PropertyApi({
    description: 'Message color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [Scheme.primary,
      Scheme.secondary,
      Scheme.success,
      Scheme.fail]
  })
  @Input() set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

}
