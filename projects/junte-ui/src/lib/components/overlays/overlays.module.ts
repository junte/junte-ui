import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ModalModule } from './modal/modal.module';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  exports: [
    ModalModule,
    PopoverModule
  ]
})
export class OverlaysModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<OverlaysModule> {
    return {
      ngModule: OverlaysModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
