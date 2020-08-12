import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ButtonModule } from '../../forms/button/button.module';
import { FilterComponent } from './filter.component';
import { FiltersComponent } from './filters.component';
import { StackModule } from '../../layout/stack/stack.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';

@NgModule({
  declarations: [
    FiltersComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ButtonModule
  ],
  entryComponents: [
    FiltersComponent,
    FilterComponent
  ],
  exports: [
    FiltersComponent,
    FilterComponent
  ]
})
export class FiltersModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<FiltersModule> {
    return {
      ngModule: FiltersModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
