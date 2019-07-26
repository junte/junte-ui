import { Component, ContentChild, Input } from '@angular/core';
import { Colors } from '../../../enum/ui';
import { BadgeComponent } from '../../badge';
import { DotComponent } from '../../dot';

@Component({
  selector: 'jnt-switcher-option',
  template: ''
})

export class SwitcherOptionComponent {

  @Input() label: string;
  @Input() value: any;
  @Input() activeColor = Colors.purpleLight;

  active = false;

  @ContentChild(DotComponent)
  dot: DotComponent;

  @ContentChild(BadgeComponent)
  badge: BadgeComponent;

}
