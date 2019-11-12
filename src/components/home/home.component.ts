import { Component } from '@angular/core';
import { UI } from '../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ui = UI;

}
