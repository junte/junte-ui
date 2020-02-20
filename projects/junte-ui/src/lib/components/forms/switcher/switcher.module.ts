import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IsEqualPipeModule } from '../../../pipes/is-equal.module';
import { StackModule } from '../../layout/stack/stack.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { DotModule } from '../dot/dot.module';
import { SwitcherOptionComponent } from './option/switcher-option.component';
import { SwitcherComponent } from './switcher.component';
import { JunteUIModuleConfig } from '../../../config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoader } from '../../../i18n/loader';
import { en } from '../../../i18n/en';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
    IsEqualPipeModule,
    IconModule
  ],
  declarations: [
    SwitcherComponent,
    SwitcherOptionComponent
  ],
  entryComponents: [
    SwitcherComponent,
    SwitcherOptionComponent
  ],
  exports: [
    SwitcherComponent,
    SwitcherOptionComponent
  ]
})
export class SwitcherModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SwitcherModule> {
    return {
      ngModule: SwitcherModule,
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
