import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from 'src/components/documentation/shared/shared.module';

import { SkeletonTestComponent } from './skeleton-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [SkeletonTestComponent],
  declarations: [SkeletonTestComponent],
})
export class SkeletonTestModule {
}
