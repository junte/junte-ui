import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ColorPipeModule } from '../../core/pipes/color.pipe.module';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../icon/icon.module';
import { LabelComponent } from './label.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ColorPipeModule
  ],
  exports: [
    LabelComponent
  ],
  entryComponents: [
    LabelComponent
  ],
  declarations: [
    LabelComponent
  ]
})
export class LabelModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<LabelModule> {
    return {
      ngModule: LabelModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
