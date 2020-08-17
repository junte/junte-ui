import { Component, ContentChildren, QueryList } from '@angular/core';
import { UI } from '../../core/enums/ui';
import { FilterComponent } from './filter.component';

@Component({
  selector: 'jnt-filters',
  templateUrl: './filters.encapsulated.html'
})
export class FiltersComponent {

  ui = UI;

  @ContentChildren(FilterComponent)
  filters: QueryList<FilterComponent>;
}
