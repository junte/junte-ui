import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { en } from '../../../i18n/en';
import { ButtonModule } from '../../forms/button/button.module';
import { FormModule } from '../../forms/form/form.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ConfirmComponent } from './confirm.component';

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
