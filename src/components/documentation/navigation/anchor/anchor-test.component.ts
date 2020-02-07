import { Component } from '@angular/core';
import { UI, AnchorComponent } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-anchor-test',
  templateUrl: './anchor-test.component.html',
  styleUrls: ['./anchor-test.component.scss']
})
export class AnchorTestComponent {

  ui = UI;
  localUi = LocalUI;

  types = {anchor: AnchorComponent};

}
