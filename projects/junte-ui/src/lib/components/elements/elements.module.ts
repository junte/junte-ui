import { ModuleWithProviders, NgModule } from '@angular/core';
import { AvatarModule } from './avatar/avatar.module';
import { BadgeModule } from './badge/badge.module';
import { IconModule } from './icon/icon.module';
import { LabelModule } from './label/label.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    AvatarModule,
    BadgeModule,
    IconModule,
    LabelModule
  ]
})
export class ElementsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ElementsModule> {
    return {
      ngModule: ElementsModule,
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
