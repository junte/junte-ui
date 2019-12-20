import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppHeaderComponent } from 'junte-ui';
import { ActionsComponent } from 'junte-ui';
import { ActionComponent } from 'junte-ui';
import { AppContentComponent } from 'junte-ui';

@Component({
  selector: 'app-app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent {

  ui = UI;
  localUi = LocalUI;
  header = AppHeaderComponent;
  actions = ActionsComponent;
  action = ActionComponent;
  content = AppContentComponent;

  headerControl = new FormControl(true);
  logotypeControl = new FormControl(true);
  menuControl = new FormControl(true);
  actionControl = new FormControl(true);
  usermenuControl = new FormControl(true);
  asideControl = new FormControl(true);
  subheaderControl = new FormControl(true);
  footerControl = new FormControl(true);

  form = this.fb.group({
    header: this.headerControl,
    logotype: this.logotypeControl,
    menu: this.menuControl,
    action: this.actionControl,
    usermenu: this.usermenuControl,
    aside: this.asideControl,
    subheader: this.subheaderControl,
    footer: this.footerControl
  });

  constructor(private fb: FormBuilder) {
  }

}



