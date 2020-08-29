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
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    ImageCropperModule.forRoot(JUNTE_UI_CONFIG),
    SwitchModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    SwitchModule
  ]
})
export class ImageCropperTestModule {
}
