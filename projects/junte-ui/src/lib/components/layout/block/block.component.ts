import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { BlockState, Paddings, Schemes, UI, Width } from '../../../enums/ui';

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

  blockState = BlockState;
  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @HostBinding('attr.scheme')
  _scheme = Schemes.primary;

  @PropertyApi({
    description: 'Title of block',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Template of block footer',
    type: 'templateRef'
  })
  @ContentChild('blockFooterTemplate', {static: false})
  blockFooterTemplate: TemplateRef<any>;


  @PropertyApi({
    description: 'Inner gutters for block',
    path: 'ui.padding',
    options: [Paddings.tiny,
      Paddings.small,
      Paddings.normal,
      Paddings.large,
      Paddings.big,
      Paddings.huge]
  })
  @HostBinding('attr.padding')
  @Input()
  padding: Paddings = Paddings.none;


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
    description: 'State of block',
    path: 'ui.block.state',
    options: [BlockState.error, BlockState.loading]
  })
  @Input()
  state: BlockState;

  @PropertyApi({
    description: 'Block color scheme',
    path: 'ui.schemes',
    default: Schemes.primary,
    options: [Schemes.primary, Schemes.secondary, Schemes.success, Schemes.fail]
  })

  @Input() set scheme(scheme: Schemes) {
    this._scheme = scheme || Schemes.primary;
  }

  success() {
    this._state.success = true;
    setTimeout(() => this._state.success = false, 2100);
  }

}
