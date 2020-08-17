import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-filter',
  template: ''
})
export class FilterComponent {

  ui = UI;

  @PropertyApi({
    description: 'Placeholder for filter',
    type: 'string'
  })
  @Input() placeholder = '';

  @PropertyApi({
    description: 'Icon for filter',
    type: 'string',
  })
  @Input() icon: string;

  @PropertyApi({
    description: 'Label for filter',
    type: 'string'
  })
  @Input() label = '';

  @PropertyApi({
    description: 'Clear filter event',
    path: 'EventEmitter'
  })
  @Output() clear = new EventEmitter<any>();

  @ContentApi({
    selector: '#filterContentTemplate',
    description: 'Filter content template'
  })
  @ContentChild('filterContentTemplate')
  filterContentTemplate: TemplateRef<any>;
}
