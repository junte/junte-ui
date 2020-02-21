import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkModule } from '../link/link.module';
import { SubMenuDirective, SubMenuItemsDirective, SubMenuTitleDirective } from './directives';
import { MenuItemComponent } from './menu-item.component';
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<MenuModule> {
    return {
      ngModule: MenuModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: I18nLoaderFactory,
            deps: [JunteUIModuleConfig]
          },
          defaultLanguage: 'en'
        }).providers
      ]
    };
  }

}
