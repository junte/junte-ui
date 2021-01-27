import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import { CATEGORIES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { FormBuilder } from '@angular/forms';
import {
  TabComponent,
  AppLayoutComponent,
  AppHeaderComponent,
  AppHeaderActionsComponent,
  AppHeaderActionComponent,
  AppContentComponent,
  AppAsideComponent,
  AppHeaderUserbarComponent,
  UI, BreakpointService,
  AppPageHeaderComponent
} from 'junte-ui';
import {Language} from '../../../../enums/language';

@Component({
  selector: 'app-layout-test',
  templateUrl: './app-layout-test.component.html',
  styleUrls: ['./app-layout-test.component.scss']
})
export class AppLayoutTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  categories = CATEGORIES;
  language = Language;

  types = {
    app: AppLayoutComponent,
    header: AppHeaderComponent,
    actions: AppHeaderActionsComponent,
    action: AppHeaderActionComponent,
    content: AppContentComponent,
    aside: AppAsideComponent,
    userbar: AppHeaderUserbarComponent,
    pageHeader: AppPageHeaderComponent
  };

  @ViewChild('code') code: TabComponent;

  busynessControl = this.fb.control(true);
  headerControl = this.fb.control(true);
  logoControl = this.fb.control(true);
  menuControl = this.fb.control(true);
  actionControl = this.fb.control(true);
  userMenuControl = this.fb.control(true);
  asideControl = this.fb.control(true);
  footerControl = this.fb.control(true);
  pageHeaderControl = this.fb.control(true);
  breadcrumbsControl = this.fb.control(true);

  builder = this.fb.group({
    busyness: this.busynessControl,
    header: this.headerControl,
    logo: this.logoControl,
    menu: this.menuControl,
    action: this.actionControl,
    userMenu: this.userMenuControl,
    aside: this.asideControl,
    footer: this.footerControl,
    pageHeader: this.pageHeaderControl,
    breadcrumbs: this.breadcrumbsControl
  });

  constructor(private fb: FormBuilder,
              public breakpoint: BreakpointService,
              @Inject(LOCALE_ID) public locale: string) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
