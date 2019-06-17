import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Paddings, Sizes, TypeBlock, Width } from '../../enum/ui';

@Component({
  selector: 'jnt-block',
  templateUrl: './encapsulated.html'
})
export class BlockComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @HostBinding('attr.loading')
  @Input()
  loading = false;

  @HostBinding('attr.padding')
  @Input()
  padding: Paddings;

  @HostBinding('attr.error')
  @Input()
  error = false;

  @HostBinding('attr.width')
  @Input()
  width: Width = Width.default;

  @HostBinding('attr.type')
  @Input()
  type = TypeBlock.simple;

  @Input()
  size: Sizes = Sizes.small;

  constructor() {
  }

  ngOnInit() {
  }

}
