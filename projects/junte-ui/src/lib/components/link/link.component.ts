import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { isArray } from 'util';
import { Icons } from '../../enum/ui';

const PATTERN = /^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$|^#/;
const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const TARGET_DEFAULT = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './encapsulated.html'
})
export class LinkComponent implements OnInit {

  externalLink = false;
  allowTarget = false;
  targetDefault = TARGET_DEFAULT;

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input() source: string | any;
  @Input() target: string;

  @HostBinding('attr.icon')
  @Input() icon: Icons;

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
