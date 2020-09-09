import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { StackModule } from '../stack/stack.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
    StackModule
  ],
  entryComponents: [
    BlockComponent
  ],
  exports: [
    BlockComponent
  ]
})
export class BlockModule {
}
