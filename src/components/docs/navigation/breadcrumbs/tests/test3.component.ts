import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-breadcrumbs-test3',
  template: `
    <jnt-stack [orientation]="ui.orientation.horizontal" [align]="ui.align.center">
      <jnt-icon [icon]="ui.icons.chevronRight"></jnt-icon>
      <div block>3</div>
    </jnt-stack>
  `,
  styleUrls: ['./test.component.scss']
})

export class BreadCrumbTest3Component {
  ui = UI;
}
