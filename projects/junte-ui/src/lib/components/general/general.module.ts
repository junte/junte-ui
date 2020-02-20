import { ModuleWithProviders, NgModule } from '@angular/core';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    ThemeSwitcherModule
  ]
})
export class GeneralModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<GeneralModule> {
    return {
      ngModule: GeneralModule,
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
