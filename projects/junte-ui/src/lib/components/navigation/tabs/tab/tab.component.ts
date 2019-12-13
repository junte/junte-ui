import { Component, ContentChild, ContentChildren, HostBinding, Input, QueryList, TemplateRef } from '@angular/core';
import { UI } from '../../../../enum/ui';
import { BadgeComponent } from '../../../elements/badge/badge.component';

@Component({
  selector: 'jnt-tab',
  template: ''
})
export class TabComponent {

  @Input()
  title: string;

  @Input()
  icon: string;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('tabContentTemplate', {static: false})
  tabContentTemplate: TemplateRef<any>;
}
