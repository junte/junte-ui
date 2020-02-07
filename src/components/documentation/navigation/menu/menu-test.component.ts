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

  schemeControl = this.fb.control(UI.scheme.primary);
  linkControl = this.fb.control(SourceType.external);
  targetControl = this.fb.control(null);
  typeControl = this.fb.control(UI.orientation.horizontal);
  spacingControl = this.fb.control(UI.size.large);
  iconsControl = this.fb.control(false);

  builder = this.fb.group({
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
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
