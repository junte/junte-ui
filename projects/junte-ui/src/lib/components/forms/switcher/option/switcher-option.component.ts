import { Component, ContentChild, Input } from '@angular/core';
import { BadgeComponent } from '../../../elements/badge/badge.component';
import { DotComponent } from '../../dot/dot.component';

@Component({
  selector: 'jnt-switcher-option',
  template: ''
})

export class SwitcherOptionComponent {

  @Input() label: string;
  @Input() value: any;
  @Input() icon: string;

  active = false;

  @ContentChild(DotComponent, {static: false})
  dot: DotComponent;

  @ContentChild(BadgeComponent, {static: false})
  badge: BadgeComponent;

}
