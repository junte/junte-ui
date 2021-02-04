import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { AccordionSectionComponent } from './section/accordion-section.component';

@Component({
  selector: 'jnt-accordion',
  templateUrl: './accordion.encapsulated.html',
  animations: [
    trigger('rotate', [
        state('open', style({transform: 'rotate(-90deg)'})),
        state('close', style({transform: 'rotate(0)'})),
        transition('open <=> close', [animate('.3s ease-in-out')]),
      ]
    ),
    trigger('collapse', [
      transition(':enter', [style({height: 0}), animate('.3s', style({height: '*'}))]),
      transition(':leave', [style({height: '*'}), animate('.3s', style({height: 0}))]),
      ]
    )
  ]
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
