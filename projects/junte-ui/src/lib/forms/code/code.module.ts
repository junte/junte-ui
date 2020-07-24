import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { StackModule } from '../../layout/stack/stack.module';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { InputModule } from '../../forms/input/input.module';
import { CodeComponent } from './code.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    StackModule,
    ArrayPipesModule,
    TranslateModule
  ],
  declarations: [
    CodeComponent
  ],
  exports: [
    CodeComponent
  ],
  entryComponents: [
    CodeComponent
  ]
})
export class CodeModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<CodeModule> {
    return {
      ngModule: CodeModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
