import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
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
import { JUNTE_UI_CONFIG } from 'src/consts';
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
    ArrayPipesModule,
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

