import { Component } from '@angular/core';
import { Schemes, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';
import { FormBuilder, FormControl } from '@angular/forms';
import { SourceType, TargetType } from '../link/link-test.component';
import { MenuItemComponent } from 'junte-ui';
import { Orientation } from 'junte-ui';
import { MenuComponent } from 'junte-ui';
import { Sizes } from 'junte-ui';
import { SubmenuComponent } from 'junte-ui';

@Component({
  selector: 'app-menu-test',
  templateUrl: './menu-test.component.html',
  styleUrls: ['./menu-test.component.scss']
})
export class MenuTestComponent {

  ui = UI;
  localUi = LocalUI;
  sourceType = SourceType;
  targetType = TargetType;
  menuItem = MenuItemComponent;
  menu = MenuComponent;
  submenu = SubmenuComponent;
  localLink = ['/documentation', 'block'];

  schemeControl = new FormControl(Schemes.primary);
  iconControl = new FormControl(false);
  linkControl = new FormControl(SourceType.external);
  targetControl = new FormControl(TargetType.self);
  badgeControl = new FormControl(false);
  typeControl = new FormControl(Orientation.horizontal);
  spacingControl = new FormControl(Sizes.large);
  subtitleIconControl = new FormControl(false);
  subtitleBadgeControl = new FormControl(false);

  menuBuilder = this.fb.group({
    scheme: this.schemeControl,
    icon: this.iconControl,
    link: this.linkControl,
    target: this.targetControl,
    badge: this.badgeControl,
    type: this.typeControl,
    spacing: this.spacingControl,
    subtitleIcon: this.subtitleIconControl,
    subtitleBadge: this.subtitleBadgeControl,
  });

  constructor(private fb: FormBuilder) {
  }

}
