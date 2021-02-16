import { Component, HostBinding, Input } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { PropertyApi } from '../../core/decorators/api';
import { Scheme } from '../../core/enums/scheme';

@Component({
  selector: 'jnt-message',
  templateUrl: './message.encapsulated.html'
})
export class MessageComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-message-host';

  @HostBinding('attr.data-scheme')
  _scheme = Scheme.primary;

  @PropertyApi({
    description: 'Label icon',
    type: 'string',
  })
  @Input() icon: string;

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
