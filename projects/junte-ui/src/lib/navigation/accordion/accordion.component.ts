import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { AccordionSectionComponent } from './section/accordion-section.component';

enum AnimationState {
  default = 'default',
  opened = 'opened',
  closed = 'closed'
}

@Component({
  selector: 'jnt-accordion',
  templateUrl: './accordion.encapsulated.html',
  animations: [
    trigger('rotate', [
        state('open', style({transform: 'rotate(180deg)'})),
        state('close', style({transform: 'rotate(90deg)'})),
        transition('open <=> close', [animate('.3s ease-in-out')]),
      ]
    ),
    trigger('collapse', [
        transition(`* => ${AnimationState.default}`, []),
        transition(':enter', [style({height: 0}), animate('.3s', style({height: '*'}))]),
        transition(':leave', [style({height: '*'}), animate('.3s', style({height: 0}))]),
      ]
    )
  ]
})
export class AccordionComponent {

  ui = UI;
  animate = AnimationState.default;

  @HostBinding('attr.host') readonly host = 'jnt-accordion-host';

  @ContentChildren(AccordionSectionComponent)
  sections: QueryList<AccordionSectionComponent>;

  @Input()
  active = 0;

  @Output()
  changed = new EventEmitter<number>();

  setActive(index: number, event: Event) {
    if (this.active === index) {
      this.active = null;
      this.animate = AnimationState.closed;
    } else {
      this.active = index;
      this.animate = AnimationState.opened;
    }
    this.changed.emit(this.active);
    event.preventDefault();
  }

}
