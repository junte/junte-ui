import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { DotComponent } from '../../elements/dot/dot.component';

@Directive({
  selector: 'jnt-switcher-option'
})

export class SwitcherOptionDirective {

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

  @PropertyApi({
    description: 'Disable switcher option',
    type: 'boolean',
  })
  @Input() disabled: boolean;

  active = false;

  @ContentChild(DotComponent)
  dot: DotComponent;

  @ContentChild(BadgeComponent)
  badge: BadgeComponent;

  @ContentChild('optionTemplate')
  optionTemplate: TemplateRef<any>;

}
