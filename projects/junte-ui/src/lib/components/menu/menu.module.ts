import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { LinkModule } from '../link/link.module';
import { StackModule } from '../stack/stack.module';
import { IconModule } from '../icon/icon.module';
import { BadgeModule } from '../badge';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    StackModule,
    BadgeModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    UserMenuComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    UserMenuComponent
  ],
})
export class MenuModule {
}
