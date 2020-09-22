import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PictureModule } from '../../elements/picture/picture.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { FormModule } from '../form/form.module';
import { ImageCropperModule } from '../image-cropper/image-cropper.module';
import { ImageUploaderComponent } from './image-uploader.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PictureModule,
    ImageCropperModule,
    FormModule,
    StackModule,
    ButtonModule
  ],
  declarations: [
    ImageUploaderComponent
  ],
  exports: [
    ImageUploaderComponent
  ]
})
export class ImageUploaderModule {

}
