import { Component } from '@angular/core';
import { Breakpoint, BreakpointService, UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  opened = false;
  point = Breakpoint;

  constructor(public breakpoint: BreakpointService) {
  }
}
