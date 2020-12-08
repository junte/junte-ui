import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-app-page-header',
  templateUrl: './app-page-header.encapsulated.html'
})
export class AppPageHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-page-header-host';

  ui = UI;

  @PropertyApi({
    description: 'Icon for page header',
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Title for page header',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Teaser for page header',
    type: 'string'
  })
  @Input()
  teaser: string;

  @ContentApi({
    selector: '#headerActionsTemplate',
    description: 'Actions template'
  })
  @ContentChild('headerActionsTemplate')
  headerActionsTemplate: TemplateRef<any>;

}
