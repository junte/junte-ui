import { Component, ContentChild, HostBinding, Input, TemplateRef } from '@angular/core';
import { UI } from '../../../enum/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './encapsulated.html',
  styleUrls: ['./encapsulated.scss']
})
export class AppHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-header-host';

  ui = UI;

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  @ContentChild('topMenu')
  topMenu: TemplateRef<any>;

  @ContentChild('logo')
  logo: TemplateRef<any>;

  @ContentChild('userbar')
  userbar: TemplateRef<any>;

}
