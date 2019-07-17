import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-circle-bar-test',
  templateUrl: './circle-bar-test.component.html',
  styleUrls: ['./circle-bar-test.component.scss']
})
export class CircleBarTestComponent {

  ui = UI;

  value = 60;

}
