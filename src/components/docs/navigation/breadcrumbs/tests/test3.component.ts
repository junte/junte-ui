import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-breadcrumbs-test3',
  template: `
    <jnt-stack [orientation]="ui.orientation.horizontal" [align]="ui.flex.align.center">
      <jnt-icon [icon]="ui.icons.chevronRight"></jnt-icon>
      <div block>3</div>
    </jnt-stack>
  `,
  styles: ['div[block] {font-size: 20px}']
})

export class BreadCrumbTest3Component {
  ui = UI;
}
