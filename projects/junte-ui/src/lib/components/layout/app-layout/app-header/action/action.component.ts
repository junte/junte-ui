import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';

@Component({
  selector: 'jnt-action',
  templateUrl: './action.encapsulated.html'
})
export class ActionComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-action-host';

  @ContentChild('template', {static: false})
  template: TemplateRef<any>;

  @ContentChild('content', {static: false})
  content: TemplateRef<any>;
}
