import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  LinkModule,
  StackModule,
  TabsModule,
  GridModule,
  AccordionModule,
  BlockModule,
  AvatarModule,
  FormModule,
  SelectModule,
  CheckboxModule,
} from 'junte-ui';
import { ArrayPipeModule } from 'projects/junte-ui/src/lib/pipes/array-pipe.module';
import { SharedModule } from '../../shared/shared.module';
import { AvatarTestComponent } from './avatar-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    BlockModule,
    AvatarModule,
    FormModule,
    AccordionModule,
    SelectModule,
    CheckboxModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    AvatarTestComponent
  ],
  declarations: [
    AvatarTestComponent
  ],
})
export class AvatarTestModule {
}

