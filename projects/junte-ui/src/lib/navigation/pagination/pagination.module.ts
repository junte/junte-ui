import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { SelectModule } from '../../forms/select/select.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PageSizeComponent } from './page-size/page-size.component';
import { PaginationComponent } from './pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    SelectModule
  ],
  declarations: [
    PaginationComponent,
    PageSizeComponent
  ],
  entryComponents: [
    PaginationComponent
  ],
  exports: [
    PaginationComponent,
    PageSizeComponent
  ]
})
export class PaginationModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PaginationModule> {
    return {
      ngModule: PaginationModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
