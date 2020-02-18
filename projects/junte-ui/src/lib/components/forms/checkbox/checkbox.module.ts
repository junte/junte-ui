import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JunteUIModuleConfig } from '../../../config';
import { JUNTE_UI_I18N_KEYS } from '../../../i18n/consts';
import { en } from '../../../i18n/en';
import { I18nLoader } from '../../../i18n/loader';
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
  ]
})
export class CheckboxModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CheckboxModule> {
    return {
      ngModule: CheckboxModule,
      providers: [
        {
          provide: JUNTE_UI_I18N_KEYS,
          useValue: config.i18n || en
        },
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: I18nLoader
          },
          defaultLanguage: 'en'
        }).providers]
    };
  }

}
