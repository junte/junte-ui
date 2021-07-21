import { ContentChildren, Directive, Input, QueryList } from '@angular/core';
import { PropertyApi } from '../../../core/decorators/api';
import { Feature } from '../../../core/enums/feature';
import { SubMenuItemDirective } from './sub-menu-item.directive';

@Directive({
  selector: 'jnt-sub-menu'
})
export class SubMenuDirective {

  @PropertyApi({
    description: 'Submenu features',
    path: 'ui.feature',
    default: '[ui.feature.title]',
    options: [Feature.title]
  })
  @Input()
  features: Feature[] = [Feature.title];

  @ContentChildren(SubMenuItemDirective)
  items: QueryList<SubMenuItemDirective>;
}
