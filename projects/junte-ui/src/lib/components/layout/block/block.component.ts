import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { BlockState, Paddings, TypeBlock, UI, Width } from '../../../enum/ui';

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

  _state = {success: false};

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-block-host';


  @PropertyApi({
    description: 'Title of block',
    type: 'string'
  })

  @Input()
  title: string;


  @PropertyApi({
    description: 'State of block: loading or error',
    path: 'ui.block.state',
    options: [BlockState.error, BlockState.loading]
  })

  @Input()
  state: BlockState;

  @PropertyApi({
    description: 'Template of block footer',
    type: 'templateRef'
  })

  @ContentChild('footerBlock', {static: false})
  footerBlock: TemplateRef<any>;


  @PropertyApi({
    description: 'Inner gutters for block',
    path: 'ui.padding',
    options: [Paddings.tiny, Paddings.small, Paddings.normal, Paddings.large, Paddings.big, Paddings.huge]
  })

  @HostBinding('attr.padding')
  @Input()
  padding: Paddings = Paddings.normal;


  @PropertyApi({
    description: 'Block width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default, Width.fluid]
  })

  @HostBinding('attr.width')
  @Input()
  width: Width = Width.default;


  @PropertyApi({
    description: 'Block type: simple or bordered',
    path: 'ui.block.type',
    default: TypeBlock.simple,
    options: [TypeBlock.simple, TypeBlock.bordered]
  })

  @HostBinding('attr.type')
  @Input()
  type = TypeBlock.simple;


  success() {
    this._state.success = true;
    setTimeout(() => this._state.success = false, 2100);
  }

}
