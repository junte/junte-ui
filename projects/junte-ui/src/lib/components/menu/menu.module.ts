import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { LinkModule } from '../link/link.module';
import { StackModule } from '../stack/stack.module';
import { IconModule } from '../icon/icon.module';
import { BadgeModule } from '../badge/badge.module';
import { SubmenuComponent } from './submenu/submenu.component';
import { SubmenuDirectiveModule } from '../../directives/submenu-directive.module';

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
    SubmenuComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    UserMenuComponent,
    SubmenuComponent
  ],
})
export class MenuModule {
}
