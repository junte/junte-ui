import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Sizes } from '../../enum/ui';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './encapsulated.html'
})
export class SkeletonComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  private _rows: number[];

  @HostBinding('attr.avatar')
  @Input() avatar = false;

  @HostBinding('attr.title')
  @Input() title = true;

  @HostBinding('attr.rows')

  @Input()
  set rows(count: number) {
    this._rows = new Array(count);
  }

  get line() {
    return this._rows;
  }

  @HostBinding('attr.size')
  @Input() size = Sizes.normal;

  constructor() {
  }

  ngOnInit() {
  }

}
