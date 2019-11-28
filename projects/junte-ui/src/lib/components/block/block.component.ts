import { Component, ContentChild, HostBinding, Input, OnInit, TemplateRef } from '@angular/core';
import { Paddings, Sizes, TypeBlock, UI, Width } from '../../enum/ui';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'jnt-block',
  templateUrl: './block.encapsulated.html',
  animations: [
    trigger('success', [
        state(
          'void',
          style({
            opacity: 0
          })
        ),
        state(
          '*',
          style({
            opacity: 1
          })
        ),
        transition(
          'void <=> *',
          [
            animate('.3s ease-in-out')
          ]
        ),
      ]
    ),
  ]
})
export class BlockComponent implements OnInit {

  state = {success: false};

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @Input()
  title: string;

  @ContentChild('footerBlock', {static: false})
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

  success() {
    this.state.success = true;
    setTimeout(() => this.state.success = false, 2100);
  }

}
