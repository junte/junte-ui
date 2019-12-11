import { ChangeDetectorRef, Component, ContentChildren, HostBinding, Input, QueryList, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Outline, Schemes, UI } from '../../../enum/ui';
import { BadgeComponent } from '../../elements/badge/badge.component';

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

  externalLink = true;

  @ViewChild(RouterLinkActive, {static: false})
  linkRef: RouterLinkActive;

  @HostBinding('attr.disabled')
  @Input() disabled = false;

  @HostBinding('attr.active')
  get linkActive(): boolean {
    this.cdr.detectChanges();
    return !!this.linkRef ? this.linkRef.isActive : false;
  }

  @HostBinding('attr.outline')
  @Input()
  outline: Outline = Outline.transparent;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @Input() exact = true;
  @Input() icon: string;
  @Input() title: string;

  @HostBinding('attr.with-title')
  get withTitle() {
    return !!this.title;
  }

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
