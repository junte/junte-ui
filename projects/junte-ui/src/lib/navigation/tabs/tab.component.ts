import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tab',
  template: ''
})
export class TabComponent {

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

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('tabContentTemplate')
  tabContentTemplate: TemplateRef<any>;

  flash() {
    this.state.flash = true;
    setTimeout(() => this.state.flash = false, 700);
  }
}
