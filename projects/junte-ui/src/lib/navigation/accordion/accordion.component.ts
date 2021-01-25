import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { AccordionSectionComponent } from './section/accordion-section.component';

@Component({
  selector: 'jnt-accordion',
  templateUrl: './accordion.encapsulated.html'
})
export class AccordionComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-accordion-host';

  @ContentChildren(AccordionSectionComponent)
  sections: QueryList<AccordionSectionComponent>;

  @Input()
  active = 0;

  @Output()
  changed = new EventEmitter<number>();

}
