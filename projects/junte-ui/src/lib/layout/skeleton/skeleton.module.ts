import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { StackModule } from '../stack/stack.module';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    StackModule,
    ArrayPipesModule
  ],
  declarations: [
    SkeletonComponent
  ],
  entryComponents: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SkeletonModule {

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<SkeletonModule> {
    return {
      ngModule: SkeletonModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
