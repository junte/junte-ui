import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.scss']
})
export class ConfirmTestComponent {

  ui = UI;
  localUi = LocalUI;

  success() {
    console.log('success');
  }

  fail() {
    console.log('fail');
  }

}
