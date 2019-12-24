import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../../../decorators/api';

@Component({
  selector: 'jnt-action',
  templateUrl: './action.encapsulated.html'
})
export class ActionComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-action-host';

  @PropertyApi({
    description: 'Action template',
    type: 'TemplateRef'
  })

  @ContentChild('template', {static: false})
  template: TemplateRef<any>;

  @PropertyApi({
    description: 'Action content',
    type: 'TemplateRef'
  })

  @ContentChild('content', {static: false})
  content: TemplateRef<any>;
}
