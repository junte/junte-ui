import { Component, ViewChild } from '@angular/core';
import { TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-responsive-test',
  templateUrl: './responsive-test.component.html',
  styleUrls: ['./responsive-test.component.scss']
})
export class ResponsiveTestComponent {

  ui = UI;
  localUi = LocalUI;

  @ViewChild('code') code: TabComponent;

}
