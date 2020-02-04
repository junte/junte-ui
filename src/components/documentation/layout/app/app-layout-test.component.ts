import { Component } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder } from '@angular/forms';
import { AppLayoutComponent } from 'junte-ui';
import { AppHeaderComponent } from 'junte-ui';
import { AppHeaderActionsComponent } from 'junte-ui';
import { AppHeaderActionComponent } from 'junte-ui';
import { AppContentComponent } from 'junte-ui';
import { AppSubHeaderComponent } from 'junte-ui';

@Component({
  selector: 'app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent {

  ui = UI;
  localUi = LocalUI;

  types = {
    app: AppLayoutComponent,
    header: AppHeaderComponent,
    actions: AppHeaderActionsComponent,
    action: AppHeaderActionComponent,
    content: AppContentComponent,
    subHeader: AppSubHeaderComponent
  };

  headerControl = this.fb.control(true);
  logoControl = this.fb.control(true);
  menuControl = this.fb.control(true);
  actionControl = this.fb.control(true);
  userMenuControl = this.fb.control(true);
  asideControl = this.fb.control(true);
  subHeaderControl = this.fb.control(true);
  footerControl = this.fb.control(true);

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
