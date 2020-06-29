import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { State } from '../../../core/enums/state';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-accordion-section',
  template: ''
})
export class AccordionSectionComponent {

  ui = UI;

  @PropertyApi({
    description: 'Accordion section title',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Accordion section icon',
    type: 'string'
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'State of accordion',
    path: 'ui.state',
    options: [State.warning,
      State.loading]
  })
  @Input()
  state: State;

  @ContentChild('accordionContentTemplate')
  accordionContentTemplate: TemplateRef<any>;

}
