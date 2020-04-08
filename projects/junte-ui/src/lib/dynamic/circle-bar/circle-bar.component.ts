import { Component, ContentChild, ContentChildren, HostBinding, QueryList, TemplateRef } from '@angular/core';
import { ContentApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { BarIndicatorGroupComponent } from './indicator-group/indicator-group.component';

@Component({
  selector: 'jnt-circle-bar',
  templateUrl: './circle-bar.encapsulated.html'
})
export class CircleBarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-circle-bar-host';

  @ContentChildren(BarIndicatorGroupComponent)
  groups: QueryList<BarIndicatorGroupComponent>;

  @ContentApi({
    selector: '#circleBarContentTemplate',
    description: 'Circle bar content template'
  })
  @ContentChild(TemplateRef)
  circleBarContentTemplate: TemplateRef<any>;

}
