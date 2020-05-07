import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { GetOptionPipe, GetOptionsPipe } from './pipes';
import { SelectComponent, SelectOptionComponent } from './select.component';

@NgModule({
  declarations: [
    SelectComponent,
    SelectOptionComponent,
    GetOptionsPipe,
    GetOptionPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    SkeletonModule,
    ButtonModule,
    ArrayPipesModule,
    StackModule,
    LoggerModule
  ],
  entryComponents: [SelectComponent],
  exports: [
    SelectComponent,
    SelectOptionComponent
  ]
})
export class SelectModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SelectModule> {
    return {
      ngModule: SelectModule,
      providers: [
        ...LoggerModule.forRoot({
          level: NgxLoggerLevel.DEBUG
        }).providers,
        {
          provide: JunteUIModuleConfig,
          useValue: config
        },
        ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
