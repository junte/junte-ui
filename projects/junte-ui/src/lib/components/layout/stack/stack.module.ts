import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../../config';
import { StackComponent } from './stack.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StackComponent
  ],
  entryComponents: [
    StackComponent
  ],
  exports: [
    StackComponent
  ]
})
export class StackModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<StackModule> {
    return {
      ngModule: StackModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
