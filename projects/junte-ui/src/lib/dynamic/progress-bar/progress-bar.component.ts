import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { ContentApi } from '../../core/decorators/api';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-progress-bar',
  templateUrl: './progress-bar.encapsulated.html',
})
export class ProgressBarComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-progress-bar-host';

  @ContentApi({
    selector: '#progressBarLegendTemplate',
    description: 'Legend template'
  })
  @ContentChild('progressBarLegendTemplate')
  progressBarLegendTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Completion percentage',
    type: 'number',
    default: '0'
  })
  @Input() value = 0;

}
