import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../../../decorators/api';
import { Scheme } from '../../../../enums/scheme';
import { UI } from '../../../../enums/ui';
import { UrlMatching } from '../../../../enums/url';
import { BadgeComponent } from '../../../elements/badge/badge.component';

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
    default: UrlMatching.fullMatch,
    options: [UrlMatching.fullMatch,
      UrlMatching.wildcard]
  })
  @Input() matching: UrlMatching = UrlMatching.fullMatch;

  @PropertyApi({
    description: 'Menu item color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [Scheme.primary,
      Scheme.secondary,
      Scheme.success,
      Scheme.fail]
  })
  @Input() scheme: Scheme = Scheme.primary;

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output() click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
