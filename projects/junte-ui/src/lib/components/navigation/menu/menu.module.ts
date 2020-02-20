import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SubMenuDirective, SubMenuItemsDirective, SubMenuTitleDirective } from './directives';
import { MenuItemComponent } from './menu-item.component';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LinkModule } from '../link/link.module';
import { MenuComponent } from './menu.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: new I18nLoader(config.i18n || en)
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
