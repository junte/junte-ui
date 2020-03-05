import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../../config';
import { DotComponent } from './dot.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    DotComponent
  ],
  declarations: [
    DotComponent
  ],
  entryComponents: [
    DotComponent,
  ]
})
export class DotModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DotModule> {
    return {
      ngModule: DotModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
