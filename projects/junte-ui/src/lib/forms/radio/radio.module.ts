import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { IconModule } from '../../elements/icon/icon.module';
import { GridModule } from '../../layout/grid/grid.module';
import { StackModule } from '../../layout/stack/stack.module';
import { RadioGroupComponent } from './radio-group/radio-group.component';
import { RadioComponent } from './radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StackModule,
    IconModule,
    GridModule
  ],
  exports: [
    RadioComponent,
    RadioGroupComponent
  ],
  declarations: [
    RadioComponent,
    RadioGroupComponent
  ],
  entryComponents: [
    RadioComponent,
    RadioGroupComponent
  ]
})
export class RadioModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<RadioModule> {
    return {
      ngModule: RadioModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
