import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { Paddings, TypeBlock, UI, Width } from '../../enum/ui';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { api } from '../../decorators/api';

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
export class BlockComponent {

  state = {success: false};

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @api({
    description: 'Title of block',
    type: 'string'
  })

  @Input()
  title: string;

  @api({
    description: 'Template of block footer',
    type: 'templateRef'
  })

  @ContentChild('footerBlock', {static: false})
  footerBlock: TemplateRef<any>;

  @api({
    description: 'Shows a spinner while the contents of the block is being fetched',
    type: 'boolean',
    default: 'false'
  })

  @Input()
  loading = false;

  @api({
    description: 'Inner gutters for block',
    path: 'ui.padding',
    options: [Paddings.tiny, Paddings.small, Paddings.normal, Paddings.large, Paddings.big, Paddings.huge]
  })

  @HostBinding('attr.padding')
  @Input()
  padding: Paddings;

  @api({
    description: 'Shows a error status if the contents have an error',
    type: 'boolean',
    default: 'false'
  })

  @Input()
  error = false;

  @api({
    description: 'Block width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @HostBinding('attr.width')
  @Input()
  width: Width = Width.default;

  @api({
    description: 'Block type: simple or bordered',
    path: 'ui.block.type',
    default: TypeBlock.simple,
    options: [TypeBlock.simple, TypeBlock.bordered]
  })

  @HostBinding('attr.type')
  @Input()
  type = TypeBlock.simple;

  success() {
    this.state.success = true;
    setTimeout(() => this.state.success = false, 2100);
  }

}
