import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-dropdown-test',
  templateUrl: './dropdown-test.component.html',
  styleUrls: ['./dropdown-test.component.scss']
})
export class DropdownTestComponent {

  ui = UI;
  localUi = LocalUI;

}
