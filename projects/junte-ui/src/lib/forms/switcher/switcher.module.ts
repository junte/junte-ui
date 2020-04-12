import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { BadgeModule } from '../../elements/badge/badge.module';
import { DotModule } from '../../elements/dot/dot.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { SwitcherOptionComponent } from './switcher-option.component';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
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
