import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../../elements/icon/icon.module';
import { ThemeSwitcherComponent } from './theme-switcher.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StackModule,
    IconModule
  ],
  exports: [
    ThemeSwitcherComponent
  ],
  declarations: [
    ThemeSwitcherComponent
  ]
})
export class ThemeSwitcherModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ThemeSwitcherModule> {
    return {
      ngModule: ThemeSwitcherModule,
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
