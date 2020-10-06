import { Component, HostBinding, Input } from '@angular/core';
import { UI } from 'src/lib/core/enums/ui';

@Component({
  selector: 'jnt-app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class AppPageHeaderComponent {

  @HostBinding('attr.host') readonly host = 'jnt-app-page-header-host';

  ui = UI;

  @Input()
  icon: string;

  @Input()
  title: string;

}
