import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { BlockComponent } from './block.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule
  ],
  entryComponents: [
    BlockComponent
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<BlockModule> {
    return {
      ngModule: BlockModule,
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
