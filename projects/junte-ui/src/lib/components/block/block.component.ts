import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { Paddings, Sizes, TypeBlock, Width } from '../../enum/ui';

@Component({
  selector: 'jnt-block',
  templateUrl: './block.encapsulated.html'
})
export class BlockComponent implements OnInit {

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @Input()
  title: string;

  @ContentChild('footerBlock')
  footerBlock: TemplateRef<any>;

  @Input()
  loading = false;

  @HostBinding('attr.padding')
  @Input()
  padding: Paddings;

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
