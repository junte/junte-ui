import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {
}
