import { Component, ViewChild } from '@angular/core';
import { TabComponent, UI, ForDirective, ForMinDirective, ForMaxDirective } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { SelectorType } from '../../shared/component-api/enums';

@Component({
  selector: 'app-responsive-test',
  templateUrl: './responsive-test.component.html',
  styleUrls: ['./responsive-test.component.scss']
})
export class ResponsiveTestComponent {

  ui = UI;
  localUi = LocalUI;
  selectorType = SelectorType;

  types = {for: ForDirective, min: ForMinDirective, max: ForMaxDirective};

  @ViewChild('code') code: TabComponent;

}
