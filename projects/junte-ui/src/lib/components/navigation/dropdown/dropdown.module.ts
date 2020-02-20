import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DropdownModule> {
    return {
      ngModule: DropdownModule,
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
