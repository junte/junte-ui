import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteDirectiveModule } from '../../../directives/junte-directive.module';
import { ArrayPipeModule } from '../../../pipes/array-pipe.module';
import { StackModule } from '../stack/stack.module';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  imports: [
    CommonModule,
    JunteDirectiveModule,
    StackModule,
    ArrayPipeModule
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
