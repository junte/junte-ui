import { Component, ContentChild, HostBinding, TemplateRef } from '@angular/core';
import { ContentApi } from '../../../../core/decorators/api';
import { UI } from '../../../../core/enums/ui';

@Component({
  selector: 'jnt-app-header-action',
  templateUrl: './app-header-action.encapsulated.html'
})
export class AppHeaderActionComponent {

  @HostBinding('attr.host')
  readonly host = 'jnt-app-header-action-host';

  ui = UI;

  @ContentApi({
    selector: '#actionLabelTemplate',
    description: 'Action label template'
  })
  @ContentChild('actionLabelTemplate')
  actionLabelTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#actionContentTemplate',
    description: 'Action content template'
  })
  @ContentChild('actionContentTemplate')
  actionContentTemplate: TemplateRef<any>;
}
