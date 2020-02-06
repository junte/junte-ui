import { Component, ContentChild, ContentChildren, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../../decorators/api';
import { Gutter } from '../../../enums/gutter';
import { BadgeComponent } from '../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tab',
  template: ''
})
export class TabComponent {

  state = {flash: false};

  _padding: Gutter = Gutter.normal;

  @PropertyApi({
    description: 'Title of tab',
    type: 'string'
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Icon for tab',
    type: 'string'
  })
  @Input()
  icon: string;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('tabContentTemplate', {static: false})
  tabContentTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Padding in column',
    path: 'ui.gutter',
    default: Gutter.normal,
    options: [Gutter.none,
      Gutter.tiny,
      Gutter.small,
      Gutter.normal,
      Gutter.big,
      Gutter.large,
      Gutter.huge]
  })
  @Input() set padding(padding: Gutter) {
    this._padding = padding || Gutter.normal;
  }

  get padding() {
    return this._padding;
  }

  flash() {
    this.state.flash = true;
    setTimeout(() => this.state.flash = false, 700);
  }
}
