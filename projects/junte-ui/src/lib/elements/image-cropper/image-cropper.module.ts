import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JUNTE_MODULE_PROVIDES, JunteUIModuleConfig } from '../../config';
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

  static forRoot(config: JunteUIModuleConfig = {}): ModuleWithProviders<ImageCropperModule> {
    return {
      ngModule: ImageCropperModule,
      providers: [
        {
          provide: JunteUIModuleConfig,
          useValue: config
        }, ...JUNTE_MODULE_PROVIDES
      ]
    };
  }

}
