import { NgModule } from '@angular/core';
import { BlockComponent } from './block.component';
import { CommonModule } from '@angular/common';
import { SpinnerModule } from '../spinner/spinner.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule
  ],
  declarations: [
    BlockComponent
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {
}
