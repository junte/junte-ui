import { ChangeDetectorRef, Component, ContentChildren, HostBinding, Input, QueryList, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Icons, Schemes, UI } from '../../enum/ui';
import { BadgeComponent } from '../badge/badge.component';

const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const DEFAULT_TARGET = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;

  private _source: string | string[] = [null];
  private _target: string = DEFAULT_TARGET;

  externalLink = false;

  @ViewChild(RouterLinkActive)
  linkRef: RouterLinkActive;

  @HostBinding('attr.disabled')
  @Input() disabled = false;

  @HostBinding('attr.active')
  get linkActive(): boolean {
    this.cdr.detectChanges();
    return !!this.linkRef ? this.linkRef.isActive : false;
  }

  @Input()
  scheme: Schemes = Schemes.primary;

  @Input() exact = true;
  @Input() icon: Icons;
  @Input() title: string;

  @Input()
  set source(source: string | string[]) {
    this.externalLink = !Array.isArray(source);
    this._source = !!source ? source : [null];
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
