import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { TextAlign } from '../../core/enums/text';

@Directive({
  selector: 'jnt-table-column'
})
export class TableColumnDirective {

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
    description: 'Column width',
    type: 'string',
  })
  @Input()
  width: string;

  @PropertyApi({
    description: 'Column title align',
    type: 'string',
    path: 'ui.text.align'
  })
  @Input()
  align: TextAlign = TextAlign.left;

  @PropertyApi({
    description: 'Column sort field',
    type: 'string',
  })
  @Input()
  orderBy: string;

}
