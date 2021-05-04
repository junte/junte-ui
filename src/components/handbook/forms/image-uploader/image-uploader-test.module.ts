import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  AvatarModule,
  FormModule,
  GridModule,
  IconModule,
  ImageUploaderModule,
  InputModule,
  LinkModule,
  SelectModule,
  StackModule,
  SwitchModule,
  TabsModule
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
      AvatarModule,
      AppLayoutModule,
      InputModule
    ]
})
export class ImageUploaderTestModule {
}
