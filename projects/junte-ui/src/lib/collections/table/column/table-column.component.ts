import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../../core/decorators/api';

@Component({
  selector: 'jnt-table-column',
  template: ``
})
export class TableColumnComponent {

  @ContentApi({
    selector: '#tableCellTemplate',
    description: 'table cell template'
  })
  @ContentChild('tableCellTemplate')
  tableCellTemplate: TemplateRef<any>;

  @PropertyApi({
    description: 'Column title',
    type: 'string',
  })
  @Input()
  title: string;

  @PropertyApi({
    description: 'Column sort field',
    type: 'string',
  })
  @Input()
  sort: string;

}
