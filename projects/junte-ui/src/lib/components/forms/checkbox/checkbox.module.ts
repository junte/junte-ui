import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { createModule, JunteUIModuleConfig } from '../../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ]
})
export class CheckboxModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CheckboxModule> {
    return createModule(CheckboxModule, config);
  }

}
