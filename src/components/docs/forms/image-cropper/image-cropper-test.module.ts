import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  FormModule,
  GridModule,
  IconModule,
  ImageCropperModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitchModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { ImageCropperTestComponent } from './image-cropper-test.component';


@NgModule({
  declarations: [
    ImageCropperTestComponent
  ],
  exports: [
    ImageCropperTestComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    SelectModule,
    AccordionModule,
    ImageCropperModule,
    SwitchModule,
    SharedModule,
    SwitchModule
  ]
})
export class ImageCropperTestModule {
}
