import { ChangeDetectorRef, Component, ContentChildren, HostBinding, Input, QueryList, ViewChild } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Outline } from '../../../enums/outline';
import { Scheme } from '../../../enums/scheme';
import { UI } from '../../../enums/ui';
import { UrlMatching } from '../../../enums/url';
import { BadgeComponent } from '../../elements/badge/badge.component';
import { PropertyApi } from '../../../decorators/api';
import { LinkTarget } from './enums';


@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  ui = UI;
  urlMatching = UrlMatching;

  private _source: string | string[];
  private _target: LinkTarget = LinkTarget.self;
  private _matching: UrlMatching = UrlMatching.fullMatch;

  @HostBinding('attr.scheme')
  _scheme = Scheme.primary;

  @HostBinding('attr.outline')
  _outline = Outline.transparent;

  externalLink = true;

  @ViewChild(RouterLinkActive, {static: false})
  linkRef: RouterLinkActive;

  @HostBinding('attr.with-title')
  get withTitle() {
    return !!this.title;
  }

  // TODO: we must find better solution
  @HostBinding('attr.active')
  get linkActive(): boolean {
    this.cdr.detectChanges();
    return !!this.linkRef ? this.linkRef.isActive : false;
  }

  @PropertyApi({
    description: 'Link color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [Scheme.primary, Scheme.secondary, Scheme.success, Scheme.fail]
  })
  @Input() set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

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
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Link title',
    type: 'string'
  })
  @Input()
  title: string;


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
    path: 'ui.navigation.link.target',
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
    description: 'Matching to activate link',
    path: 'ui.url.matching',
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
    description: 'Disable link',
    type: 'boolean',
    default: 'false'
  })
  @HostBinding('attr.disabled')
  @Input()
  disabled = false;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  constructor(private cdr: ChangeDetectorRef) {

  }

}
