import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  FormModule,
  GridModule,
  IconModule,
  ImageUploaderModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitchModule,
  TabsModule,
  AvatarModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ImageUploaderTestComponent } from './image-uploader-test.component';


@NgModule({
  declarations: [
    ImageUploaderTestComponent
  ],
  exports: [
    ImageUploaderTestComponent
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
    ImageUploaderModule,
    SwitchModule,
    SharedModule,
    SwitchModule,
    AvatarModule
  ]
})
export class ImageUploaderTestModule {
}
