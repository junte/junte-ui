import { ConfirmModule } from './confirm/confirm.module';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    ConfirmModule
  ]
})
export class SharedModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
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
