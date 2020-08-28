import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { GridModule } from '../../layout/grid/grid.module';
import { StackModule } from '../../layout/stack/stack.module';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    GridModule,
    ArrayPipesModule
  ],
  exports: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  declarations: [
    CheckboxComponent,
    CheckboxGroupComponent,
  ],
  entryComponents: [
    CheckboxComponent,
    CheckboxGroupComponent
  ]
})
export class CheckboxModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CheckboxModule> {
    return {
      ngModule: CheckboxModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
