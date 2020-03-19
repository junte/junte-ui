import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StackModule } from '../../layout/stack/stack.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { SwitchComponent } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    ReactiveFormsModule,
    StackModule
  ],
  exports: [
    SwitchComponent
  ],
  entryComponents: [
    SwitchComponent
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SwitchModule> {
    return {
      ngModule: SwitchModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
