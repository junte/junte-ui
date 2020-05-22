import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-collapsible',
  templateUrl: './collapsible.encapsulated.html'
})
export class CollapsibleComponent {

  @HostBinding('attr.host') readonly host = 'jnt-collapsible-host';

  ui = UI;

  opened = false;

  @PropertyApi({
    description: 'icon of collapsible',
    type: 'string'
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Title of collapsible',
    type: 'string'
  })
  @Input() title: string;

  @ContentApi({
    selector: '#collapsibleTitleTemplate',
    description: 'collapsible title template'
  })
  @ContentChild('collapsibleTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#collapsibleContentTemplate',
    description: 'collapsible content template'
  })
  @ContentChild('collapsibleContentTemplate')
  contentTemplate: TemplateRef<any>;
}
