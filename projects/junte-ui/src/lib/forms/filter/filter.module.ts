import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { FilterComponent } from './filter.component';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ButtonModule
  ],
  entryComponents: [
    FilterComponent
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<FilterModule> {
    return {
      ngModule: FilterModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
