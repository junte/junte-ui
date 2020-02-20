import { ModuleWithProviders, NgModule } from '@angular/core';
import { ModalModule } from './modal/modal.module';
import { PopoverModule } from './popover/popover.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    ModalModule,
    PopoverModule
  ]
})
export class OverlaysModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<OverlaysModule> {
    return {
      ngModule: OverlaysModule,
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
