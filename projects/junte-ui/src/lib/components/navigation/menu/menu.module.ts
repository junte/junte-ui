import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmenuDirectiveModule } from './submenu-directive.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkModule } from '../link/link.module';
import { MenuComponent } from './menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    StackModule,
    BadgeModule,
    SubmenuDirectiveModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    UserMenuComponent,
  ],
  entryComponents: [
    MenuComponent,
    MenuItemComponent,
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    UserMenuComponent,
  ],
})
export class MenuModule {
}
