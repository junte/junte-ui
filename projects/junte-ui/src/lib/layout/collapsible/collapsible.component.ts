import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { Orientation } from '../../core/enums/orientation';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-collapsible',
  templateUrl: './collapsible.encapsulated.html'
})
export class CollapsibleComponent {

  @HostBinding('attr.host') readonly host = 'jnt-collapsible-host';

  ui = UI;

  @HostBinding('attr.data-orientation')
  _orientation: Orientation = Orientation.horizontal;

  @PropertyApi({
    description: 'Collapsible orientation',
    path: 'ui.orientation',
    default: Orientation.horizontal,
    options: [Orientation.horizontal, Orientation.vertical]
  })
  @Input() set orientation(type: Orientation) {
    this._orientation = type || Orientation.horizontal;
  }

  get orientation() {
    return this._orientation;
  }

  @PropertyApi({
    description: 'opened of collapsible',
    type: 'boolean',
    default: 'false'
  })
  @Input()
  opened = false;

  @PropertyApi({
    description: 'icon of collapsible',
    type: 'string'
  })
  @Input()
  icon: string;

  @PropertyApi({
    description: 'Title of collapsible',
    type: 'string'
  })
  @Input()
  title: string;

  @ContentApi({
    selector: '#collapsibleTitleTemplate',
    description: 'collapsible title template'
  })
  @ContentChild('collapsibleTitleTemplate')
  titleTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#collapsibleContentTemplate',
    description: 'collapsible content template'
  })
  @ContentChild('collapsibleContentTemplate')
  contentTemplate: TemplateRef<any>;
}
