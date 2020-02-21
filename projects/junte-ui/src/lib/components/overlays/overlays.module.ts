import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../config';
import { en } from '../../i18n/en';
import { ModalModule } from './modal/modal.module';
import { PopoverModule } from './popover/popover.module';

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
