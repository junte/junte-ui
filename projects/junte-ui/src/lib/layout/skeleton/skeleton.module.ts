import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
}
