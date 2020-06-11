import { Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { Scheme } from '../../core/enums/scheme';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { CardState } from './enums';

@Component({
  selector: 'jnt-card',
  templateUrl: './card.encapsulated.html'
})
export class CardComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-card-host';

  cardState = CardState;

  @HostBinding('attr.data-scheme')
  _scheme = Scheme.primary;

  @HostBinding('attr.data-padding')
  _padding = Gutter.normal;

  @PropertyApi({
    description: 'Title of card',
    type: 'string'
  })
  @Input()
  title: string;

  @ContentApi({
    selector: '#cardTitleTemplate',
    description: 'Card title template'
  })
  @ContentChild('cardTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#cardActionsTemplate',
    description: 'card actions template'
  })
  @ContentChild('cardActionsTemplate')
  cardActionsTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Icon indicator',
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'State of card',
    path: 'ui.card.state',
    options: [CardState.error,
      CardState.loading]
  })
  @Input()
  state: CardState;

  @PropertyApi({
    description: 'Card color scheme',
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
    description: 'Padding for card',
    path: 'ui.gutter',
    options: [Gutter.none,
      Gutter.tiny,
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
    description: 'Card width',
    path: 'ui.width',
    default: Width.default,
    options: [Width.default,
      Width.fluid]
  })
  @HostBinding('attr.data-width')
  @Input()
  width: Width = Width.default;

  @PropertyApi({
    description: 'Сlickable card',
    path: 'ui.feature',
    options: [Feature.clickable]
  })
  @HostBinding('attr.data-features')
  @Input()
  features: Feature[] = [];

  @PropertyApi({
    description: 'Output event of click',
    type: 'Event Emitter'
  })
  @Output() click = new EventEmitter<any>();

  @HostBinding('attr.tabindex')
  get tabindex() {
    return !!this.features && this.features.includes(Feature.clickable) ? 1 : null;
  }

}
