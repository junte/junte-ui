import { ContentChildren, EventEmitter, HostBinding, Input, Output, QueryList } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Scheme } from '../../core/enums/scheme';
import { UI } from '../../core/enums/ui';
import { UrlMatching } from '../../core/enums/url';
import { BadgeComponent } from '../../elements/badge/badge.component';

const DEFAULT_TARGET = '_self';

interface Link {
  source: string | any[];
  fragment: string;
}

export abstract class AbstractMenuItem {

  ui = UI;

  link: Link;

  _scheme: Scheme = Scheme.primary;
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
    type: 'string | string[] | Link'
  })
  @Input('link')
  set __link__(link: string | string[] | Link) {
    this.link = (typeof (link) === 'string' || link instanceof Array
      ? {source: link, position: null} : link) as Link;
  }

  @PropertyApi({
    description: 'Menu item target',
    type: 'string',
    default: '_self',
    options: ['_blank', '_self', '_parent', '_top']
  })
  @Input()
  target: string = DEFAULT_TARGET;

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
    description: 'Menu item color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [
      Scheme.primary,
      Scheme.secondary,
      Scheme.success,
      Scheme.fail
    ]
  })
  @Input()
  set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

  get scheme() {
    return this._scheme;
  }

  @Input()
  active: boolean;

  @PropertyApi({
    description: 'Click event',
    path: 'EventEmitter'
  })
  @Output()
  click = new EventEmitter<any>();

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

}
