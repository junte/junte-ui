import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { IconModule } from '../icon/icon.module';
import { PictureComponent } from './picture.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule
  ],
  exports: [
    PictureComponent
  ],
  entryComponents: [
    PictureComponent
  ],
  declarations: [
    PictureComponent
  ]
})
export class PictureModule {
}
