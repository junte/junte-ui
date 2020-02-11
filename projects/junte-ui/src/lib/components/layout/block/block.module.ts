import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MediaQueryDirective } from '../../../directives/media-query';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { BlockComponent } from './block.component';

@NgModule({
  declarations: [
    BlockComponent,
    MediaQueryDirective
  ],
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
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
