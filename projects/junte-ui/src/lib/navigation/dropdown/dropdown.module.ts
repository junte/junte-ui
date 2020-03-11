import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<DropdownModule> {
    return {
      ngModule: DropdownModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
