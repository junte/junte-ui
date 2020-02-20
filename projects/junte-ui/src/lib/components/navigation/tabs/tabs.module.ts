import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    BadgeModule
  ],
  declarations: [
    TabsComponent,
    TabComponent
  ],
  entryComponents: [
    TabsComponent,
    TabComponent
  ],
  exports: [
    TabsComponent,
    TabComponent
  ]
})
export class TabsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<TabsModule> {
    return {
      ngModule: TabsModule,
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
