import { ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { LinkTarget } from '../link/enums';
import { PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';
import { UrlMatching } from '../../core/enums/url';
import { BadgeComponent } from '../../elements/badge/badge.component';

export abstract class AbstractMenuItem {

  ui = UI;

  _matching: UrlMatching = UrlMatching.fullMatch;

  @HostBinding('attr.opened')
  opened = false;

  @PropertyApi({
    description: 'Loading for menu item',
    default: 'false',
    type: 'boolean'
  })
  @Input()
  loading = false;

  @PropertyApi({
    description: 'Icon for menu item',
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Disable menu item',
    type: 'boolean',
    default: 'false'
  })
  @Input() disabled = false;

  @PropertyApi({
    description: 'Menu item title',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    name: 'link',
    description: 'Menu item source',
    type: 'string | any[]'
  })
  @Input()
  link: string | (string | { [key: string]: string | number })[];

  @PropertyApi({
    description: 'Menu item target',
    type: 'string',
    default: LinkTarget.self,
    options: [LinkTarget.blank, LinkTarget.parent, LinkTarget.self, LinkTarget.top]
  })
  @Input()
  target: string = LinkTarget.self;

  @PropertyApi({
    description: 'Methods of matching',
    path: 'ui.matching',
    default: UrlMatching.fullMatch,
    options: [UrlMatching.fullMatch,
      UrlMatching.wildcard]
  })
  @Input()
  matching: UrlMatching = UrlMatching.fullMatch;

  @PropertyApi({
    description: 'Set active menu item',
    type: 'boolean'
  })
  @Input()
  active: boolean;

  @PropertyApi({
    description: 'Menu item query params',
    type: '{[k: string]: any}'
  })
  @Input()
  queryParams: { [k: string]: any };

  @PropertyApi({
    description: 'Fragment for link #anchor',
    default: 'null',
  })
  @Input()
  fragment: string;

  @PropertyApi({
    description: 'Output event for click on menu item'
  })
  @Output()
  click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
