import { Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { State } from '../../core/enums/state';
import { UI } from '../../core/enums/ui';
import { AccordionSectionComponent } from './section/accordion-section.component';

@Component({
  selector: 'jnt-accordion',
  templateUrl: './accordion.encapsulated.html'
})
export class AccordionComponent {

  ui = UI;
  accordionState = State;

  @HostBinding('attr.host') readonly host = 'jnt-accordion-host';

  @ContentChildren(AccordionSectionComponent)
  sections: QueryList<AccordionSectionComponent>;

  @Input()
  active = 0;

}
