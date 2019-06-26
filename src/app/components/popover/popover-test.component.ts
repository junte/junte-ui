import { Component } from '@angular/core';
import { UI } from 'junte-ui';

@Component({
  selector: 'app-popover-test',
  templateUrl: './popover-test.component.html',
  styleUrls: ['./popover-test.component.scss']
})
export class PopoverTestComponent {
  ui = UI;
  title = 'Title';
}
