import { Component, ContentChild, Input } from '@angular/core';
import { BadgeComponent } from '../../badge/badge.component';
import { DotComponent } from '../../dot/dot.component';

@Component({
  selector: 'jnt-switcher-option',
  template: ''
})

export class SwitcherOptionComponent {

  @Input() label: string;
  @Input() value: any;

  active = false;

  @ContentChild(DotComponent)
  dot: DotComponent;

  @ContentChild(BadgeComponent)
  badge: BadgeComponent;

}
