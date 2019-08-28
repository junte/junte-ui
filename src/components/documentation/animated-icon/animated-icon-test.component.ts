import { Component } from '@angular/core';
import { UI } from 'projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-animated-icon-test',
  templateUrl: './animated-icon-test.component.html',
  styleUrls: ['./animated-icon-test.component.scss']
})
export class AnimatedIconTestComponent {

  ui = UI;
  icons = ['running_man'];
}
