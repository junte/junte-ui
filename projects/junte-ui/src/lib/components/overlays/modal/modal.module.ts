import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { SanitizePipeModule } from '../../../pipes/sanitize.pipe.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { BlockModule } from '../../layout/block/block.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ModalComponent } from './modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BlockModule,
    ButtonModule,
    StackModule,
    IconModule,
    SanitizePipeModule
  ],
  entryComponents: [
    ModalComponent
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
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
