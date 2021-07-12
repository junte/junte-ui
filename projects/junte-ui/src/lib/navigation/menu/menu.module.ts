import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PopoverModule } from '../../overlays/popover/popover.module';
import { LinkModule } from '../link/link.module';
import { MenuItemDirective } from './menu-item.directive';
import { MenuComponent } from './menu.component';
import { SubMenuItemDirective } from './sub-menu/sub-menu-item.directive';
import { SubMenuDirective } from './sub-menu/sub-menu.directive';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
    StackModule,
    BadgeModule,
    SpinnerModule,
    PopoverModule,
    ArrayPipesModule
  ],
  exports: [
    MenuComponent,
    MenuItemDirective,
    SubMenuDirective,
    SubMenuItemDirective
  ],
  entryComponents: [
    MenuComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemDirective,
    SubMenuDirective,
    SubMenuItemDirective
  ],
})
export class MenuModule {
}
