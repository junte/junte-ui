import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { JunteDirectiveModule } from '../../directives/junte-directive.module';

@NgModule({
  imports: [
    CommonModule,
    JunteDirectiveModule
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
