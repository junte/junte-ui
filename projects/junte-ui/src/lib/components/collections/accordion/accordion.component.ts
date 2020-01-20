import { Component, ContentChildren, HostBinding, QueryList } from '@angular/core';
import { AccordionSectionComponent } from './section/accordion-section.component';
import { UI } from '../../../enums/ui';

@Component({
  selector: 'jnt-accordion',
  templateUrl: './accordion.encapsulated.html'
})
export class AccordionComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-accordion-host';

  @ContentChildren(AccordionSectionComponent)
  sections: QueryList<AccordionSectionComponent>;

  active = 0;

}
