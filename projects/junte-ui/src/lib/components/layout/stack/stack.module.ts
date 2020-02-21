import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { StackComponent } from './stack.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StackComponent
  ],
  entryComponents: [
    StackComponent
  ],
  exports: [
    StackComponent
  ]
})
export class StackModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<StackModule> {
    return {
      ngModule: StackModule,
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
