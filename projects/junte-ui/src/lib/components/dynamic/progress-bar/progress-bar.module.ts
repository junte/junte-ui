import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ProgressBarComponent } from './progress-bar.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ProgressBarComponent
  ],
  entryComponents: [
    ProgressBarComponent
  ],
  declarations: [
    ProgressBarComponent
  ]
})
export class ProgressBarModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ProgressBarModule> {
    return {
      ngModule: ProgressBarModule,
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
