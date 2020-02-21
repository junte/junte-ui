import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { ProgressBarComponent } from './progress-bar.component';

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
