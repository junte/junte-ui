import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { LinkModule } from '../link/link.module';
import { MenuItemComponent } from './menu-item.component';
import { MenuComponent } from './menu.component';
import { SubMenuItemComponent } from './sub-menu/sub-menu-item.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    StackModule,
    BadgeModule,
    SpinnerModule,
    PopoverModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    SubMenuItemComponent
  ],
  entryComponents: [
    MenuComponent,
    MenuItemComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    SubMenuItemComponent
  ],
})
export class MenuModule {
}
