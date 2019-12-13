import { Component } from '@angular/core';
import { UI } from '../../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.scss']
})
export class ConfirmTestComponent {

  ui = UI;

  success() {
    console.log('success');
  }

  fail() {
    console.log('fail');
  }

}
