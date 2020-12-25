import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from '../slider/slider.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { ImageCropperComponent } from './image-cropper.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    SpinnerModule,
    FormsModule,
    SliderModule
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
