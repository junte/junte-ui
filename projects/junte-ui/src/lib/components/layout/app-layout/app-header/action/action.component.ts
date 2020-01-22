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
    description: 'Action label template',
    type: 'TemplateRef'
  })

  @ContentChild('actionLabelTemplate', {static: false})
  actionLabelTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Action content template',
    type: 'TemplateRef'
  })

  @ContentChild('actionContentTemplate', {static: false})
  actionContentTemplate: TemplateRef<any>;
}
