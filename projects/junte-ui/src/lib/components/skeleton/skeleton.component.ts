import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Sizes, TypeSkeleton, UI } from '../../enum/ui';

@Component({
  selector: 'jnt-skeleton',
  templateUrl: './skeleton.encapsulated.html'
})
export class SkeletonComponent implements OnInit {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-skeleton-host';

  @HostBinding('attr.type')
  @Input()
  type: TypeSkeleton = TypeSkeleton.text;

  @HostBinding('attr.size')
  @Input() size = Sizes.normal;

  private _lines: number[];

  @HostBinding('attr.lines')
  @Input()
  set lines(count: number) {
    this._lines = new Array(count);
  }

  get line() {
    return this._lines;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
