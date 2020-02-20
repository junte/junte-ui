import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../../elements/icon/icon.module';
import { SwitchComponent } from './switch.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule}  from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule
  ],
  exports: [
    SwitchComponent
  ],
  entryComponents: [
    SwitchComponent
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SwitchModule> {
    return {
      ngModule: SwitchModule,
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
