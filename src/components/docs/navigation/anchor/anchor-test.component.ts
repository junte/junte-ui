import { Component } from '@angular/core';
import { AnchorComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-anchor-test',
  templateUrl: './anchor-test.component.html',
  styleUrls: ['./anchor-test.component.scss']
})
export class AnchorTestComponent {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {anchor: AnchorComponent};

}
