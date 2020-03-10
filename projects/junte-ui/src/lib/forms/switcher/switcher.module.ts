import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IsEqualPipeModule } from '../../core/pipes/is-equal.pipe.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { DotModule } from '../dot/dot.module';
import { SwitcherOptionComponent } from './switcher-option.component';
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
