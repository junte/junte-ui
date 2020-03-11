import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { LpLayoutComponent } from './layout/lp-layout.component';
import { LpRewindComponent } from './rewind/lp-rewind.component';
import { LpSlideComponent } from './slide/lp-slide.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ButtonModule,
    TranslateModule
  ],
  declarations: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ],
  exports: [
    LpLayoutComponent,
    LpRewindComponent,
    LpSlideComponent
  ]
})
export class LpModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LpModule> {
    return {
      ngModule: LpModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
