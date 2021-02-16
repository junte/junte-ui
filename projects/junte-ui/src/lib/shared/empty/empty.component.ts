import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ContentApi, PropertyApi } from '../../core/decorators/api';
import { UI } from '../../core/enums/ui';

@Component({
  selector: 'jnt-empty',
  templateUrl: './empty.component.html',
  styleUrls: ['./empty.component.scss']
})
export class EmptyComponent {

  ui = UI;

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
    selector: '#imageTemplate',
    description: 'image template'
  })
  @ContentChild('imageTemplate')
  imageTemplate: TemplateRef<any>;

  @ContentApi({
    selector: '#descriptionTemplate',
    description: 'image template'
  })
  @ContentChild('descriptionTemplate')
  descriptionTemplate: TemplateRef<any>;

}
