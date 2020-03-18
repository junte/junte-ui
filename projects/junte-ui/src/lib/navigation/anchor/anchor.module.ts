import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';

import { AnchorComponent } from './anchor.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    AnchorComponent
  ],
  exports: [
    AnchorComponent
  ],
  entryComponents: [
    AnchorComponent
  ]
})
export class AnchorModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<AnchorModule> {
    return {
      ngModule: AnchorModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
