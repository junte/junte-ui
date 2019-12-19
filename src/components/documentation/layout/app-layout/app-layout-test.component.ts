import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent {

  ui = UI;
  localUi = LocalUI;

  header = new FormControl(true);
  logotype = new FormControl(true);
  menu = new FormControl(true);
  action = new FormControl(true);
  usermenu = new FormControl(true);

  form = this.fb.group({
    header: this.header,
    logotype: this.logotype,
    menu: this.menu,
    action: this.action,
    usermenu: this.usermenu,
  });

  constructor(private fb: FormBuilder) {
  }

}
