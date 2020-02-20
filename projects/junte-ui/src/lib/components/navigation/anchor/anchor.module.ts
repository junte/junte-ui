import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';

import { AnchorComponent } from './anchor.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    AnchorComponent
  ],
  exports: [
    AnchorComponent
  ],
  entryComponents: [
    AnchorComponent
  ]
})
export class AnchorModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AnchorModule> {
    return {
      ngModule: AnchorModule,
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
