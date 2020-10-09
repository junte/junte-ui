import { Component, HostBinding, Input } from '@angular/core';
import { UI } from '../../../core/enums/ui';

@Component({
  selector: 'jnt-app-page-header',
  templateUrl: './app-page-header.encapsulated.html'
})
export class AppPageHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-page-header-host';

  ui = UI;

  @Input()
  icon: string;

  @Input()
  title: string;

  @Input()
  teaser: string;

}
