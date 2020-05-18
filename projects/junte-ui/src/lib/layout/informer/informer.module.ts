import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../forms/button/button.module';
import { StackModule } from '../stack/stack.module';
import { InformerComponent, InformerMessageComponent } from './informer.component';

@NgModule({
  declarations: [
    InformerComponent,
    InformerMessageComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    IconModule,
    ButtonModule
  ],
  entryComponents: [
    InformerComponent,
    InformerMessageComponent
  ],
  exports: [
    InformerComponent,
    InformerMessageComponent
  ]
})
export class InformerModule {
  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<InformerModule> {
    return {
      ngModule: InformerModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }
}
