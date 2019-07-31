import {Component, ContentChildren, HostBinding, Input, OnInit, QueryList} from '@angular/core';
import { isArray } from 'util';
import { Icons, Schemes, UI } from '../../enum/ui';
import {BadgeComponent} from '../badge/badge.component';

const PATTERN = /^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$|^#/;
const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const TARGET_DEFAULT = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './link.encapsulated.html'
})
export class LinkComponent implements OnInit {

  ui = UI;

  private _source: any[];
  externalLink = false;
  allowTarget = false;
  targetDefault = TARGET_DEFAULT;

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input()
  set source(source: any) {
    this._source = Array.isArray(source) ? source : [source];
  }

  get source() {
    return this._source;
  }

  @Input() target: string;
  @Input() exact = true;


  @Input() icon: Icons;
  @Input() title: string;

  @HostBinding('attr.disabled')
  @Input() disabled = false;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @Input()
  scheme: Schemes = Schemes.primary;

  constructor() {
  }

  ngOnInit() {
    if (!!this.source) {
      this.externalLink = !isArray(this.source) && !!this.source.match(PATTERN);
    }
    if (!!this.target) {
      this.allowTarget = ALLOW_TARGETS.includes(this.target);
    }
  }

}
