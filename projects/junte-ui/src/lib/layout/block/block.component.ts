import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { Feature } from '../../core/enums/feature';
import { MethodApi, PropertyApi } from '../../core/decorators/api';
import { Gutter } from '../../core/enums/gutter';
import { Scheme } from '../../core/enums/scheme';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { BlockState } from './enums';

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

  blockState = BlockState;
  ui = UI;

  _state = {success: false};

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @HostBinding('attr.data-scheme')
  _scheme = Scheme.primary;

  @HostBinding('attr.data-padding')
  _padding = Gutter.normal;

  @PropertyApi({
    description: 'Title of block',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Block color scheme',
    path: 'ui.schemes',
    default: Scheme.primary,
    options: [Scheme.primary,
      Scheme.secondary,
      Scheme.success,
      Scheme.fail]
  })
  @Input() set scheme(scheme: Scheme) {
    this._scheme = scheme || Scheme.primary;
  }

  @PropertyApi({
    description: 'Padding for content & footer',
    path: 'ui.gutter',
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.large,
      Gutter.big,
      Gutter.huge]
  })
  @Input() set padding(padding: Gutter) {
    this._padding = padding || Gutter.normal;
  }

  @PropertyApi({
    description: 'Block width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default,
      Width.fluid]
  })
  @HostBinding('attr.data-width')
  @Input()
  width: Width = Width.default;

  @PropertyApi({
    description: 'State of block',
    path: 'ui.block.state',
    options: [BlockState.error,
      BlockState.loading]
  })
  @Input()
  state: BlockState;

  @PropertyApi({
    description: 'Adapted block on mobile view',
    path: 'ui.feature',
    options: [Feature.adapted]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @ContentChild('blockFooterTemplate')
  blockFooterTemplate: TemplateRef<any>;

  @MethodApi({description: 'show success animation'})
  success() {
    this._state.success = true;
    setTimeout(() => this._state.success = false, 2100);
  }

}
