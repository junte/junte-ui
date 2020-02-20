import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { SanitizePipeModule } from '../../../pipes/sanitize.module';
import { ButtonModule } from '../../forms/button/button.module';
import { BlockModule } from '../../layout/block/block.module';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ModalComponent } from './modal.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

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
