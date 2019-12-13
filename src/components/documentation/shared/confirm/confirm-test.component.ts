import { Component, TemplateRef, ViewChild } from '@angular/core';
import { UI } from '../../../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.scss']
})
export class ConfirmTestComponent {

  ui = UI;

  @ViewChild('message', {static: false})
  message: TemplateRef<any>;

  loading = false;

  load() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }

  success() {
    console.log('success');
    this.load();
  }

  fail() {
    console.log('fail');
  }

}
