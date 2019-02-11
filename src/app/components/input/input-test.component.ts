import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.scss']
})
export class InputTestComponent {
  ui = UI;
}
