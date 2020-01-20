import { Component, OnInit, ViewChild } from '@angular/core';
import { Schemes, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { SourceType, TargetType } from '../link/link-test.component';
import { MenuItemComponent } from 'junte-ui';
import { Orientation } from 'junte-ui';
import { MenuComponent } from 'junte-ui';
import { Sizes } from 'junte-ui';
import { SubmenuComponent, TabComponent} from 'junte-ui';

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  targetType = TargetType;
  menuItem = MenuItemComponent;
  menu = MenuComponent;
  submenu = SubmenuComponent;
  localLink = ['/documentation', 'block'];

  @ViewChild('code', {static: false}) code: TabComponent;

  schemeControl = new FormControl(Schemes.primary);
  linkControl = new FormControl(SourceType.external);
  targetControl = new FormControl(TargetType.self);
  typeControl = new FormControl(Orientation.horizontal);
  spacingControl = new FormControl(Sizes.large);
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
