import { ContentChild, ContentChildren, Directive, Input, QueryList, TemplateRef } from '@angular/core';
import { PropertyApi } from '../../core/decorators/api';
import { BadgeComponent } from '../../elements/badge/badge.component';

@Directive({
  selector: 'jnt-tab'
})
export class TabDirective {

  state = {flash: false};

  @PropertyApi({
    description: 'Title of tab',
    type: 'string'
  })
  @Input() title: string;

  @PropertyApi({
    description: 'Title template of tab',
    type: 'TemplateRef<any>'
  })
  @Input()
  titleTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Icon for tab',
    type: 'string'
  })
  @Input() icon: string;

  @ContentChildren(BadgeComponent)
  badges: QueryList<BadgeComponent>;

  @ContentChild('tabContentTemplate')
  tabContentTemplate: TemplateRef<any>;
}
