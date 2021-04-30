import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { BreakpointService } from '../responsive/breakpoint.service';
import { ContentApi, MethodApi, PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { State } from '../../core/enums/state';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';

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

  ui = UI;

  _state = {success: false};

  @HostBinding('attr.host') readonly host = 'jnt-block-host';

  @HostBinding('attr.data-has-help')
  get hasHelp() {
    return !!this.blockHelpTemplate;
  }

  @HostBinding('attr.data-has-header')
  get hasHeader() {
    return !!this.blockHeaderTemplate || !!this.title;
  }

  @HostBinding('attr.data-padding')
  _padding = Gutter.normal;

  _spacing = Gutter.normal;

  @PropertyApi({
    description: 'Title of block',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Padding for block',
    path: 'ui.gutter',
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.large,
      Gutter.big,
      Gutter.huge],
    default: Gutter.normal
  })
  @Input() set padding(padding: Gutter) {
    this._padding = padding || Gutter.normal;
  }

  @PropertyApi({
    description: 'Spacing between header, body and footer',
    path: 'ui.gutter',
    options: [Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.large,
      Gutter.big,
      Gutter.huge],
    default: Gutter.normal
  })
  @Input() set spacing(spacing: Gutter) {
    this._spacing = spacing || Gutter.normal;
  }

  get spacing() {
    return this._spacing;
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
    path: 'ui.state',
    options: [State.error,
      State.loading]
  })
  @Input()
  state: State;

  @PropertyApi({
    description: 'Adapted block on mobile view',
    path: 'ui.feature',
    options: [Feature.adapted]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @ContentApi({
    selector: '#blockHelpTemplate',
    description: 'Block help template'
  })
  @ContentChild('blockHelpTemplate')
  blockHelpTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#blockHeaderTemplate',
    description: 'Block header template'
  })
  @ContentChild('blockHeaderTemplate')
  blockHeaderTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#blockFooterTemplate',
    description: 'Block footer template'
  })
  @ContentChild('blockFooterTemplate')
  blockFooterTemplate: TemplateRef<any>;

  @MethodApi({description: 'Show success animation'})
  success() {
    this._state.success = true;
    setTimeout(() => this._state.success = false, 2100);
  }

  constructor(public breakpoint: BreakpointService) {
  }
}
