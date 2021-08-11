import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren, ElementRef,
  HostBinding,
  Input,
  QueryList, Renderer2,
  TemplateRef
} from '@angular/core';
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

type LinkSource = string | (string | { [key: string]: string | number })[];

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('rotate', [
      state('opened', style({transform: 'rotate(-180deg)'})),
      state('closed', style({transform: 'rotate(0)'})),
      transition('opened <=> closed', [animate('.4s ease')])
    ])
  ]
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;
  icon: Icon;

  private _source: LinkSource;
  private _target: LinkTarget = LinkTarget.self;
  private _matching: UrlMatching = UrlMatching.fullMatch;

  external = false;

  @HostBinding('attr.data-context')
  _context: Context = Context.text;

  @HostBinding('attr.data-outline')
  _outline = Outline.transparent;

  @HostBinding('attr.data-with-title')
  get withTitle() {
    return !!this.title;
  }

  @HostBinding('attr.data-has-badge')
  get hasBadge() {
    return !!this.badges.length;
  }

  @Input()
  collapsed: boolean;

  @Input()
  opened: boolean;

  @Input()
  active = false;

  @PropertyApi({
    description: 'Disable link',
    type: 'boolean',
    default: 'false'
  })
  @HostBinding('attr.data-disabled')
  @Input()
  disabled = false;

  @PropertyApi({
    description: 'Link outline',
    path: 'ui.outline',
    default: Outline.transparent,
    options: [Outline.transparent,
      Outline.ghost,
      Outline.fill]
  })
  @Input()
  set outline(outline: Outline) {
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

  @HostBinding('attr.data-position')
  get position() {
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
  queryParams: { [k: string]: any };

  @PropertyApi({
    description: 'Link source',
    type: 'string | (string | { [key: string]: string | number })[]'
  })
  @Input()
  set source(source: LinkSource) {
    this._source = source;
    if (!!source) {
      this.external = !Array.isArray(source);
      this._orphan = false;
    } else {
      this.external = false;
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

  @Input()
  set attributes(attributes: { [key: string]: string }) {
    Object.keys(attributes || {}).forEach(name => this.renderer
      .setAttribute(this.hostRef.nativeElement, name, attributes[name]));
  }

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('linkContentTemplate')
  contentTemplate: TemplateRef<any>;

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2) {
  }
}
