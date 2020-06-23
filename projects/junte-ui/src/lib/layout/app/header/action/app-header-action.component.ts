import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { UI } from '../../../../core/enums/ui';
import { PropertyApi } from '../../../../core/decorators/api';

@Component({
  selector: 'jnt-app-header-action',
  templateUrl: './app-header-action.encapsulated.html'
})
export class AppHeaderActionComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-app-header-action-host';

  ui = UI;

  @PropertyApi({
    description: 'Action label template',
    type: 'TemplateRef'
  })

  @ContentChild('actionLabelTemplate')
  actionLabelTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Action content template',
    type: 'TemplateRef'
  })

  @ContentChild('actionContentTemplate')
  actionContentTemplate: TemplateRef<any>;
}
