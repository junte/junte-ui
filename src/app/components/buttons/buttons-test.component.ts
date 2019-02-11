import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-buttons-test',
  templateUrl: './buttons-test.component.html',
  styleUrls: ['./buttons-test.component.scss']
})
export class ButtonsTestComponent {
  ui = UI;
}
