import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SubMenuDirective, SubMenuItemsDirective, SubMenuTitleDirective } from './directives';
import { MenuItemComponent } from './menu-item.component';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkModule } from '../link/link.module';
import { MenuComponent } from './menu.component';

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
    MenuItemComponent
  ],
  entryComponents: [
    MenuComponent,
    MenuItemComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    SubMenuDirective,
    SubMenuItemsDirective,
    SubMenuTitleDirective
  ],
})
export class MenuModule {
}
