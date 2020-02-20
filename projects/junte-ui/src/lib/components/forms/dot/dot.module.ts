import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DotComponent } from './dot.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DotComponent
  ],
  declarations: [
    DotComponent
  ]
})
export class DotModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DotModule> {
    return {
      ngModule: DotModule,
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
