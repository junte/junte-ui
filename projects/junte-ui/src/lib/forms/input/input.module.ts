import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { InputComponent } from './input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule
  ],
  exports: [
    InputComponent,
  ],
  entryComponents: [
    InputComponent
  ],
  declarations: [
    InputComponent,
  ]
})
export class InputModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<InputModule> {
    return {
      ngModule: InputModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
