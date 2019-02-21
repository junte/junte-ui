import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Positions, Schemes} from '../../enum/ui';

@Component({
  selector: 'jnt-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input()
  count: number;

  @HostBinding('attr.scheme')
  @Input()
  scheme: Schemes = Schemes.primary;

  @HostBinding('attr.position')
  @Input()
  position: Positions = Positions.rightTop;

  constructor() {
  }

  ngOnInit() {
  }

}
