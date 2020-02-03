import { ChangeDetectorRef, Component, ContentChildren, HostBinding, Input, QueryList, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Outline } from '../../../enums/outline';
import { Scheme } from '../../../enums/scheme';
import { UI } from '../../../enums/ui';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { PropertyApi } from '../../../decorators/api';

const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;

  private _source: string | string[];
  private _target: string = DEFAULT_TARGET;

  @HostBinding('attr.scheme')
  _scheme = Scheme.primary;

  @HostBinding('attr.outline')
  _outline = Outline.transparent;

  externalLink = true;

  @ViewChild(RouterLinkActive, {static: false})
  linkRef: RouterLinkActive;

  @PropertyApi({
    description: 'Disable link',
    type: 'boolean',
  })

  @HostBinding('attr.disabled')
  @Input() disabled = false;

  @HostBinding('attr.active')
  get linkActive(): boolean {
    this.cdr.detectChanges();
    return !!this.linkRef ? this.linkRef.isActive : false;
  }

  @PropertyApi({
    description: 'Link outline',
    path: 'ui.outline',
    default: Outline.transparent,
    options: [Outline.transparent, Outline.ghost, Outline.fill]
  })

  @Input() set outline(outline: Outline) {
    if (!!outline) {
      this._outline = outline;
    } else {
      this._outline = Outline.transparent;
    }
  }

  @PropertyApi({
    description: 'Link color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [Scheme.primary, Scheme.secondary, Scheme.success, Scheme.fail]
  })

  @Input() set scheme(scheme: Scheme) {
    if (!!scheme) {
      this._scheme = scheme;
    } else {
      this._scheme = Scheme.primary;
    }
  }

  @PropertyApi({
    description: 'Icon for link',
    type: 'string'
  })

  @Input() icon: string;

  @Input() exact = true;

  @PropertyApi({
    description: 'Link title',
    type: 'string'
  })

  @Input() title: string;

  @HostBinding('attr.with-title')
  get withTitle() {
    return !!this.title;
  }

  @PropertyApi({
    description: 'Link source',
    type: 'string | string[]'
  })

  @Input()
  set source(source: string | string[]) {
    if (!!source) {
      this.externalLink = !Array.isArray(source);
      this._source = source;
    }
  }

  get source() {
    return this._source;
  }

  @PropertyApi({
    description: 'Link target',
    type: 'string',
    default: '_self',
    options: ['_blank', '_self', '_parent', '_top']
  })

  @Input()
  set target(target: string) {
    this._target = ALLOW_TARGETS.includes(target) ? target : DEFAULT_TARGET;
  }

  get target() {
    return this._target;
  }

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  constructor(private cdr: ChangeDetectorRef) {
  }

}
