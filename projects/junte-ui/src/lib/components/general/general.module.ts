import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { en } from '../../i18n/en';
import { ThemeSwitcherModule } from './theme-switcher/theme-switcher.module';

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
