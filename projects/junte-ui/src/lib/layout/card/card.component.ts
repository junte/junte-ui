import { Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { Height } from '../../core/enums/height';
import { Breakpoint } from '../../core/enums/breakpoint';
import { BreakpointService } from '../responsive/breakpoint.service';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { Feature } from '../../core/enums/feature';
import { Gutter } from '../../core/enums/gutter';
import { Position } from '../../core/enums/position';
import { State } from '../../core/enums/state';
import { UI } from '../../core/enums/ui';
import { Width } from '../../core/enums/width';
import { PopoverComponent } from '../../overlays/popover/popover.component';

class Picture {
  url: string;
  template: TemplateRef<any>;
  position: Position = Position.left;
  width = 70;
  height = 70;

  constructor(defs: any = null) {
    Object.assign(this, defs);
  }
}

@Component({
  selector: 'jnt-card',
  templateUrl: './card.encapsulated.html'
})
export class CardComponent {

  ui = UI;

  @HostBinding('attr.host') readonly host = 'jnt-card-host';

  picture: Picture;
  popover: PopoverComponent;

  @HostBinding('attr.data-height')
  _height: Height = Height.default;

  @HostBinding('attr.data-has-color')
  get hasColor() {
    return !!this.color;
  }

  @HostBinding('attr.data-has-icon')
  get hasAction() {
    return !!this.icon || !!this.cardActionsTemplate;
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
    description: 'Height of card',
    path: 'ui.height',
    options: [Height.default, Height.fluid],
    default: Height.default
  })
  @Input() set height(height: Height) {
    this._height = height || Height.default;
  }

  @PropertyApi({
    description: 'Picture on card',
    type: 'string'
  })
  @Input('picture')
  set __picture__(picture: string | Picture) {
    if (!!picture) {
      this.picture = typeof (picture) === 'string'
        ? new Picture({url: picture, template: null, position: Position.left, width: 70, height: 70}) : new Picture(picture);
    } else {
      this.picture = null;
    }
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
    description: 'Card actions template'
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
    default: Gutter.normal,
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
    description: 'Сlickable card; Adapted card on mobile view',
    path: 'ui.feature',
    options: [Feature.clickable, Feature.adapted]
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

  hideActions() {
    this.popover.hide();
  }

  get mobile() {
    return this.breakpoint.current === Breakpoint.mobile;
  }

  constructor(private breakpoint: BreakpointService) {
  }

}
