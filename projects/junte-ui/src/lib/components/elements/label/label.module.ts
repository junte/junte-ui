import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPipesModule } from '../../../pipes/color-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { LabelComponent } from './label.component';
import { IconModule } from '../icon/icon.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ColorPipesModule
  ],
  exports: [
    LabelComponent
  ],
  entryComponents: [
    LabelComponent
  ],
  declarations: [
    LabelComponent
  ]
})
export class LabelModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LabelModule> {
    return {
      ngModule: LabelModule,
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
