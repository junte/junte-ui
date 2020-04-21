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
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
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

