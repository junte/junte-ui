import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

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

}
