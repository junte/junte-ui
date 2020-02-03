import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-breadcrumbs-test1',
  template: `
    <jnt-stack [type]="ui.layout.stack.type.horizontal" [align]="ui.flex.align.center">
      <jnt-icon [icon]="ui.icons.chevronRight"></jnt-icon>
      <div block>1</div>
      <router-outlet></router-outlet>
    </jnt-stack>
  `,
  styleUrls: ['../../../_component.scss'],
  styles: ['div[block] {font-size: 20px}']
})

export class BreadCrumbTest1Component {
  ui = UI;
}
