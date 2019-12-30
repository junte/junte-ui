import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Matching, Schemes, UI } from '../../../../enum/ui';
import { BadgeComponent } from '../../../elements/badge/badge.component';
import { PropertyApi } from '../../../../decorators/api';

const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-menu-item',
  template: ''
})
export class MenuItemComponent {

  ui = UI;

  @PropertyApi({
    description: 'Icon for menu item',
    type: 'string'
  })

  @Input() icon: string;

  @PropertyApi({
    description: 'Menu item title',
    type: 'string'
  })

  @Input() title: string;

  @PropertyApi({
    description: 'Menu item source',
    type: 'string | string[]'
  })

  @Input() link: string | string[];

  @PropertyApi({
    description: 'Menu item target',
    type: 'string',
    default: '_self',
    options: ['_blank', '_self', '_parent', '_top']
  })
  @Input() target: string = DEFAULT_TARGET;


  @PropertyApi({
    description: 'Methods of matching',
    path: 'ui.url.matching',
    default: Matching.fullMatch,
    options: [Matching.fullMatch, Matching.wildcard]
  })

  @Input() matching: Matching = Matching.fullMatch;

  @PropertyApi({
    description: 'Menu item color scheme',
    path: 'ui.schemes',
    default: Schemes.primary,
    options: [Schemes.primary, Schemes.secondary, Schemes.success, Schemes.fail]
  })

  @Input() scheme: Schemes = Schemes.primary;

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })

  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
