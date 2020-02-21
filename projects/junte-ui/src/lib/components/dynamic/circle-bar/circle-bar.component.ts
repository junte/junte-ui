import { Component, ContentChild, ContentChildren, HostBinding, QueryList, TemplateRef } from '@angular/core';
import { ContentApi } from '../../../decorators/api';
import { UI } from '../../../enums/ui';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';

@Component({
  selector: 'jnt-circle-bar',
  templateUrl: './circle-bar.encapsulated.html'
})
export class CircleBarComponent {

  ui = UI;

  @ContentChildren(BarIndicatorGroupComponent)
  groups: QueryList<BarIndicatorGroupComponent>;

  @ContentApi({
    selector: '#circleBarContentTemplate',
    description: 'Circle bar content template'
  })
  @ContentChild(TemplateRef)
  circleBarContentTemplate: TemplateRef<any>;

  @HostBinding('attr.host') readonly host = 'jnt-circle-bar-host';
}
