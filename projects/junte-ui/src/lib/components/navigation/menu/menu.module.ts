import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubmenuDirectiveModule } from '../../../directives/submenu-directive.module';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { LinkModule } from '../link/link.module';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuComponent } from './menu.component';
import { SubmenuComponent } from './submenu/submenu.component';
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
    SubmenuComponent
  ],
  entryComponents: [
    MenuItemComponent,
    MenuComponent,
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
