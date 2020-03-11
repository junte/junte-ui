import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { en } from '../../core/i18n/en';
import { StackModule } from '../../layout/stack/stack.module';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioComponent } from './radio.component';

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
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
