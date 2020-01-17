import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { AppHeaderComponent } from 'junte-ui';
import { ActionsComponent } from 'junte-ui';
import { ActionComponent } from 'junte-ui';
import { AppContentComponent } from 'junte-ui';
import { AppSubHeaderComponent } from 'junte-ui';

@Component({
  selector: 'app-app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent {

  ui = UI;
  localUi = LocalUI;

  types = {
    header: AppHeaderComponent,
    actions: ActionsComponent,
    action: ActionComponent,
    content: AppContentComponent,
    subHeader: AppSubHeaderComponent
  };

  headerControl = new FormControl(true);
  logoControl = new FormControl(true);
  menuControl = new FormControl(true);
  actionControl = new FormControl(true);
  userMenuControl = new FormControl(true);
  asideControl = new FormControl(true);
  subHeaderControl = new FormControl(true);
  footerControl = new FormControl(true);

  form = this.fb.group({
    header: this.headerControl,
    logo: this.logoControl,
    menu: this.menuControl,
    action: this.actionControl,
    userMenu: this.userMenuControl,
    aside: this.asideControl,
    subHeader: this.subHeaderControl,
    footer: this.footerControl
  });

  constructor(private fb: FormBuilder) {
  }

}



