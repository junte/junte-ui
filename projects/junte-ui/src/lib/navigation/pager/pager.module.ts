import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { SelectModule } from '../../forms/select/select.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PagerComponent } from './pager.component';

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
    PagerComponent
  ],
  entryComponents: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ]
})
export class PagerModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<PagerModule> {
    return {
      ngModule: PagerModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
