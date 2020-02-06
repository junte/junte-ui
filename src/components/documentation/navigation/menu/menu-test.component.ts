import { Component, OnInit, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { MenuItemComponent } from 'junte-ui';
import { MenuComponent } from 'junte-ui';
import { SubmenuComponent, TabComponent } from 'junte-ui';

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
  menuItem = MenuItemComponent;
  menu = MenuComponent;
  submenu = SubmenuComponent;
  localLink = ['/documentation', 'block'];

  @ViewChild('code', {static: false}) code: TabComponent;

  schemeControl = new FormControl(UI.scheme.primary);
  linkControl = new FormControl(SourceType.external);
  targetControl = new FormControl();
  typeControl = new FormControl(UI.orientation.horizontal);
  spacingControl = new FormControl(UI.size.large);
  iconsControl = new FormControl(false);

  form = this.fb.group({
    scheme: this.schemeControl,
    link: this.linkControl,
    target: this.targetControl,
    type: this.typeControl,
    spacing: this.spacingControl,
    icons: this.iconsControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }
}
