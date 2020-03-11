import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
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

  @ContentChild('accordionContentTemplate')
  accordionContentTemplate: TemplateRef<any>;

}
