import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { UI } from '../../../../enums/ui';

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

  @ContentChild('accordionContentTemplate', {static: false})
  accordionContentTemplate: TemplateRef<any>;

}
