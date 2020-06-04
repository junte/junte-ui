import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuComponent, MenuItemComponent, UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

enum SourceType {
  external = 'external',
  local = 'local'
}

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  menuItem = MenuItemComponent;
  menu = MenuComponent;

  @ViewChild('code') code: TabComponent;

  schemeControl = this.fb.control(null);
  linkControl = this.fb.control(null);
  targetControl = this.fb.control(null);
  orientationControl = this.fb.control(null);
  spacingControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);
  collapsedControl = this.fb.control(false);

  builder = this.fb.group({
    scheme: this.schemeControl,
    link: this.linkControl,
    target: this.targetControl,
    orientation: this.orientationControl,
    spacing: this.spacingControl,
    icons: this.iconsControl,
    badges: this.badgesControl,
    collapsed: this.collapsedControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
