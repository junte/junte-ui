import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { StackComponent } from './stack.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
