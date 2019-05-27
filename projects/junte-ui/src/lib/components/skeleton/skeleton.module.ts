import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';
import { StackModule } from '../stack/stack.module';

@NgModule({
  imports: [
    CommonModule,
    JunteDirectiveModule,
    StackModule
  ],
  declarations: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ]
})
export class SkeletonModule {
}
