import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-empty',
  templateUrl: './empty.encapsulated.html'
})
export class EmptyComponent {

  ui = UI;

  @HostBinding('attr.host')
  readonly host = 'jnt-empty-host';

  @PropertyApi({
    description: 'Message about empty data',
    type: 'string'
  })
  @Input()
  message: string;

  @PropertyApi({
    description: 'Description of empty data',
    type: 'string'
  })
  @Input()
  description: string;

  @ContentApi({
    selector: '#emptyImageTemplate',
    description: 'image template'
  })
  @ContentChild('emptyImageTemplate')
  imageTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#emptyDescriptionTemplate',
    description: 'image template'
  })
  @ContentChild('emptyDescriptionTemplate')
  descriptionTemplate: TemplateRef<any>;

}
