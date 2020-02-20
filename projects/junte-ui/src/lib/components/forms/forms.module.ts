import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { CalendarModule } from './calendar/calendar.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DotModule } from './dot/dot.module';
import { FormModule } from './form/form.module';
import { InputModule } from './input/input.module';
import { RadioModule } from './radio/radio.module';
import { SelectModule } from './select/select.module';
import { SwitchModule } from './switch/switch.module';
import { SwitcherModule } from './switcher/switcher.module';
import { JunteUIModuleConfig } from '../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../i18n/loader';
import { en } from '../../i18n/en';

@NgModule({
  exports: [
    ButtonModule,
    CalendarModule,
    CheckboxModule,
    DatePickerModule,
    DotModule,
    FormModule,
    InputModule,
    RadioModule,
    SelectModule,
    SwitchModule,
    SwitcherModule
  ]
})
export class UiFormsModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<UiFormsModule> {
    return {
      ngModule: UiFormsModule,
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
