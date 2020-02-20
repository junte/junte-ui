import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { ButtonModule } from '../../forms/button/button.module';
import { FormModule } from '../../forms/form/form.module';
import { StackModule } from '../../layout/stack/stack.module';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
    imports: [
        CommonModule,
        ButtonModule,
        FormModule,
        StackModule,
        JunteDirectiveModule,
        TranslateModule
    ],
  exports: [
    ConfirmComponent
  ]
})
export class ConfirmModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ConfirmModule> {
    return {
      ngModule: ConfirmModule,
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
