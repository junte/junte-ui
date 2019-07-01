import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-checkbox-test',
  templateUrl: './checkbox-test.component.html',
  styleUrls: ['./checkbox-test.component.scss']
})
export class CheckboxTestComponent {
  ui = UI;

  selected = [2, 3];
}
