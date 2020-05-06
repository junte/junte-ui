import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ui = UI;
  localUi = LocalUI;
  opened = false;
}
