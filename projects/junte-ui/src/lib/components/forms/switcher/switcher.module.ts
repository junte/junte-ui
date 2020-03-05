import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { I18nLoaderFactory, JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../../config';
import { en } from '../../../i18n/en';
import { IsEqualPipeModule } from '../../../pipes/is-equal.pipe.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DotModule } from '../dot/dot.module';
import { SwitcherOptionComponent } from './option/switcher-option.component';
import { SwitcherComponent } from './switcher.component';

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
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
