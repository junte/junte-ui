import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SubMenuItemComponent } from './sub-menu/sub-menu-item.component';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkModule } from '../link/link.module';
import { MenuItemComponent } from './menu-item.component';
import { MenuComponent } from './menu.component';
import { SubMenuDirective, SubMenuItemsDirective } from './menu.directives';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

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
    SubMenuComponent,
    SubMenuItemComponent,
    SubMenuDirective,
    SubMenuItemsDirective
  ],
  entryComponents: [
    MenuComponent,
    MenuItemComponent
  ],
  declarations: [
    MenuComponent,
    MenuItemComponent,
    SubMenuComponent,
    SubMenuItemComponent,
    SubMenuDirective,
    SubMenuItemsDirective
  ],
})
export class MenuModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<MenuModule> {
    return {
      ngModule: MenuModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
