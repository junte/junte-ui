import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { DotComponent } from '../dot/dot.component';

@Component({
  selector: 'jnt-switcher-option',
  template: ''
})

export class SwitcherOptionComponent {

  @PropertyApi({
    description: 'Text on switcher option',
    type: 'string',
  })
  @Input() label: string;

  @PropertyApi({
    description: 'Switcher option value',
    type: 'any',
  })
  @Input() value: any;

  @PropertyApi({
    description: 'Icon for switcher option',
    type: 'string',
  })
  @Input() icon: string;

  active = false;

  @ContentChild(DotComponent)
  dot: DotComponent;

  @ContentChild(BadgeComponent)
  badge: BadgeComponent;

  @ContentChild('optionTemplate')
  optionTemplate: TemplateRef<any>;

}
