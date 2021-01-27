import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuComponent, MenuItemComponent, UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

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

  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  types = {menu: MenuComponent, menuItem: MenuItemComponent};
  categories = CATEGORIES;

  @ViewChild('code') code: TabComponent;

  orientationControl = this.fb.control(null);
  spacingControl = this.fb.control(null);
  iconsControl = this.fb.control(true);
  badgesControl = this.fb.control(true);
  collapsedControl = this.fb.control(false);
  loadingControl = this.fb.control(false);
  styleControl = this.fb.control(null);
  disabledControl = this.fb.control(null);

  builder = this.fb.group({
    orientation: this.orientationControl,
    spacing: this.spacingControl,
    icons: this.iconsControl,
    badges: this.badgesControl,
    collapsed: this.collapsedControl,
    loading: this.loadingControl,
    style: this.styleControl,
    disabled: this.disabledControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());

    this.styleControl.valueChanges.subscribe(value => {
      if (value === UI.menu.style.tabs) {
        this.orientationControl.setValue(UI.orientation.horizontal);
        this.orientationControl.disable();
      } else {
        this.orientationControl.enable();
      }
    });
  }
}
