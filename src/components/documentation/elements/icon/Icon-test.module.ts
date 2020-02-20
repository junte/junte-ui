import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ButtonModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { ArrayPipeModule } from 'projects/junte-ui/src/lib/pipes/array-pipe.module';
import { SharedModule } from '../../shared/shared.module';
import { IconTestComponent } from './icon-test.component';
import { GetGroupsPipe, GetIconsPipe, GetPathPipe, IconsListComponent } from './select-icon/icons-list/icons-list.component';
import { SelectIconComponent } from './select-icon/select-icon.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LinkModule,
    StackModule,
    TabsModule,
    GridModule,
    FormModule,
    AccordionModule,
    GridModule,
    IconModule,
    SelectModule,
    LabelModule,
    ButtonModule,
    ArrayPipeModule,
    SharedModule
  ],
  exports: [
    IconTestComponent
  ],
  entryComponents: [
    SelectIconComponent
  ],
  declarations: [
    IconTestComponent,
    SelectIconComponent,
    IconsListComponent,
    GetIconsPipe,
    GetGroupsPipe,
    GetPathPipe
  ],
})
export class IconTestModule {
}

