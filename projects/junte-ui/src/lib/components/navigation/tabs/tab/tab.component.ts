import { Component, ContentChild, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { BadgeComponent } from '../../../elements/badge/badge.component';
import { PropertyApi } from '../../../../decorators/api';

@Component({
  selector: 'jnt-tab',
  template: ''
})
export class TabComponent {

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
}
