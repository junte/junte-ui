import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../button/button.module';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { BadgeModule } from '../../elements/badge/badge.module';
import { DotModule } from '../../elements/dot/dot.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CheckSelectedPipe } from './pipes';
import { SwitcherOptionComponent } from './switcher-option.component';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
    IconModule,
    SkeletonModule,
    ArrayPipesModule,
    ButtonModule,
    TranslateModule
  ],
  declarations: [
    SwitcherComponent,
    SwitcherOptionComponent,
    CheckSelectedPipe
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
