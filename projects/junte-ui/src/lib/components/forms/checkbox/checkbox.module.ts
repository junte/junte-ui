import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { IconModule } from '../../elements/icon/icon.module';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  entryComponents: [
    CheckboxComponent,
  ]
})
export class CheckboxModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CheckboxModule> {
    return {
      ngModule: CheckboxModule,
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
