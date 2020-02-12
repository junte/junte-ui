import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaQueryDirectiveModule } from '../../../directives/media-query.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
    MediaQueryDirectiveModule
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
