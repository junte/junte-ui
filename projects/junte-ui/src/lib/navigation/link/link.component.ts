import { Component, ContentChildren, HostBinding, Input, QueryList, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { PropertyApi } from '../../core/decorators/api';
import { Context } from '../../core/enums/context';
import { Feature } from '../../core/enums/feature';
import { Outline } from '../../core/enums/outline';
import { Position } from '../../core/enums/position';
import { UI } from '../../core/enums/ui';
import { UrlMatching } from '../../core/enums/url';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { LinkTarget } from './enums';

interface Icon {
  icon: string;
  position: Position;
}

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;
  icon: Icon;

  private _source: string | any[];
  private _target: LinkTarget = LinkTarget.self;
  private _matching: UrlMatching = UrlMatching.fullMatch;

  externalLink = true;

  @HostBinding('attr.data-context')
  _context: Context = Context.text;

  @HostBinding('attr.data-outline')
  _outline = Outline.transparent;

  @HostBinding('attr.data-with-title')
  get withTitle() {
    return !!this.title;
  }

  @Input() collapsed: boolean;

  // TODO: we must find better solution
  @HostBinding('attr.data-active')
  get linkActive(): boolean {
    return !!this.linkRef ? this.linkRef.isActive : false;
  }

  @PropertyApi({
    description: 'Disable link',
    type: 'boolean',
    default: 'false'
  })
  @HostBinding('attr.data-disabled')
  @Input() disabled = false;

  @PropertyApi({
    description: 'Link outline',
    path: 'ui.outline',
    default: Outline.transparent,
    options: [Outline.transparent,
      Outline.ghost,
      Outline.fill]
  })
  @Input() set outline(outline: Outline) {
    this._outline = outline || Outline.transparent;
  }

  @PropertyApi({
    description: 'Icon for link',
    type: 'string',
    name: 'icon'
  })
  @Input('icon')
  set __icon__(icon: string | Icon) {
    this.icon = (typeof (icon) === 'string'
      ? {icon: icon, position: Position.left} : icon) as Icon;
  }

  @HostBinding('attr.data-position') get position() {
    return !!this.icon ? this.icon.position : null;
  }

  @PropertyApi({
    description: 'Link title',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Link query params',
    type: '{[k: string]: any}'
  })
  @Input()
  queryParams: {[k: string]: any};

  @PropertyApi({
    description: 'Link source',
    type: 'string | string[]'
  })
  @Input()
  set source(source: string | string[]) {
    if (!!source) {
      this.externalLink = !Array.isArray(source);
      this._source = source;
    } else {
      this._orphan = true;
    }
  }

  get source() {
    return this._source;
  }

  @HostBinding('attr.data-orphan')
  _orphan = false;

  @PropertyApi({
    description: 'Link target',
    path: 'ui.target',
    default: LinkTarget.self,
    options: [LinkTarget.blank,
      LinkTarget.self,
      LinkTarget.parent,
      LinkTarget.top]
  })
  @Input()
  set target(target: LinkTarget) {
    this._target = target || LinkTarget.self;
  }

  get target() {
    return this._target;
  }

  @PropertyApi({
    description: 'Fragment for link #anchor',
    default: 'null',
  })
  @Input()
  fragment: string;

  @PropertyApi({
    description: 'Matching to activate link',
    path: 'ui.matching',
    default: UrlMatching.fullMatch,
    options: [UrlMatching.fullMatch, UrlMatching.wildcard]
  })
  @Input()
  set matching(matching: UrlMatching) {
    this._matching = matching || UrlMatching.fullMatch;
  }

  get matching() {
    return this._matching;
  }

  @PropertyApi({
    description: 'Show chevron near link',
    path: 'ui.feature',
    options: [Feature.dropdown],
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @PropertyApi({
    description: 'Link context',
    path: 'ui.context',
    default: Context.text,
    options: [Context.text, Context.box]
  })
  @Input()
  set context(context: Context) {
    this._context = context || Context.text;
  }

  @ViewChild(RouterLinkActive)
  linkRef: RouterLinkActive;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;
}
