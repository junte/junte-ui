import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ConfirmModule } from './confirm/confirm.module';

@NgModule({
  exports: [
    ConfirmModule
  ]
})
export class SharedModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
