import { Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { State } from '../../core/enums/state';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { PopoverComponent } from '../../overlays/popover/popover.component';

interface Picture {
  url: string;
  width: number;
  height: number;
}

@Component({
  selector: 'jnt-card',
  templateUrl: './card.encapsulated.html'
})
export class CardComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-card-host';

  cardState = State;
  feature = Feature;
  picture: Picture;
  popover: PopoverComponent;

  @HostBinding('attr.data-has-color')
  get hasColor() {
    return !!this.color;
  }

  @HostBinding('attr.data-has-icon')
  get hasAction() {
    return !!this.icon || !!this.cardActionsTemplate;
  }

  @HostBinding('attr.data-has-picture')
  get hasPicture() {
    return !!this.picture;
  }

  @HostBinding('attr.data-padding')
  _padding = Gutter.normal;

  @PropertyApi({
    description: 'Title of card',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Picture on card',
    type: 'string'
  })
  @Input('picture')
  set __picture__(picture: string | Picture) {
    this.picture = (typeof (picture) === 'string'
      ? {url: picture, width: 70, height: 70} : picture) as Picture;
  }

  @ContentApi({
    selector: '#cardHeaderTemplate',
    description: 'Card header template'
  })
  @ContentChild('cardHeaderTemplate')
  headerTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#cardTitleTemplate',
    description: 'Card title template'
  })
  @ContentChild('cardTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#cardFooterTemplate',
    description: 'Card footer template'
  })
  @ContentChild('cardFooterTemplate')
  footerTemplate: TemplateRef<any>;

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
    path: 'ui.state',
    options: [State.error,
      State.loading]
  })
  @Input()
  state: State;

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
    description: 'Card indicator color',
    type: 'string',
    default: 'purple'
  })
  @Input()
  color: string;

  @PropertyApi({
    description: 'Output event of click on card content',
    type: 'Event Emitter'
  })
  @Output() selected = new EventEmitter<any>();

  @HostBinding('attr.tabindex')
  get tabindex() {
    return !!this.features && this.features.includes(Feature.clickable) ? 1 : null;
  }

  hideActions() {
    this.popover.hide();
  }

}
