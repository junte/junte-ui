import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-svg-icon-test',
  templateUrl: './svg-icon-test.component.html',
  styleUrls: ['./svg-icon-test.component.scss']
})
export class SvgIconTestComponent {

  ui = UI;
  icons = ['question'];
  iconset = 'standard';
}
