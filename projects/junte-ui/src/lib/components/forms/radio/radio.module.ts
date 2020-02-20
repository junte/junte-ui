import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackModule } from '../../layout/stack/stack.module';
import { RadioComponent } from './radio.component';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    StackModule
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ],
  entryComponents: [
    RadioComponent
  ]
})
export class RadioModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<RadioModule> {
    return {
      ngModule: RadioModule,
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
