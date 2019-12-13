import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { UI } from '../../../../enum/ui';

@Component({
  selector: 'jnt-accordion-section',
  template: ''
})
export class AccordionSectionComponent {

  ui = UI;

  @Input() title: string;

  @ContentChild('sectionContentTemplate', {static: false})
  sectionContentTemplate: TemplateRef<any>;

}
