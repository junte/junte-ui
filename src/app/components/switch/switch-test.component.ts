import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.scss']
})
export class SwitchTestComponent {
  ui = UI;
}
