import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { IconModule } from '../icon/icon.module';
import { ImageCropperComponent } from './image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    SpinnerModule,
    FormsModule
  ],
  exports: [
    ImageCropperComponent
  ],
  declarations: [
    ImageCropperComponent
  ],
  entryComponents: [
    ImageCropperComponent
  ]
})
export class ImageCropperModule {
}
