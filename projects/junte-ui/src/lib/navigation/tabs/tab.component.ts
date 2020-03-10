import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { Gutter } from '../../core/enums/gutter';
import { BadgeComponent } from '../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tab',
  template: ''
})
export class TabComponent {

  private _padding: Gutter = Gutter.normal;
  state = {flash: false};

  @PropertyApi({
    description: 'Title of tab',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Icon for tab',
    type: 'string'
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Padding in tab',
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

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('tabContentTemplate')
  tabContentTemplate: TemplateRef<any>;

  flash() {
    this.state.flash = true;
    setTimeout(() => this.state.flash = false, 700);
  }
}
