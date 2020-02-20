import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { JunteUIModuleConfig } from '../../../config';
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
