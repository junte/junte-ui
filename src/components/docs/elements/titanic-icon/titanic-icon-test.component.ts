import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-titanic-icon-test',
  templateUrl: './titanic-icon-test.component.html',
  styleUrls: ['./titanic-icon-test.component.scss']
})
export class TitanicIconTestComponent {

  ui = UI;
  localUi = LocalUI;
}
