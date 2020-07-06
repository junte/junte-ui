import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AvatarModule, BlockModule,
  ButtonModule,
  CardModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  InputModule,
  LabelModule,
  LinkModule,
  SelectableModule,
  SelectModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from 'src/components/docs/shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SelectableTestComponent } from './selectable-test.component';


@NgModule({
  declarations: [SelectableTestComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    CardModule.forRoot(JUNTE_UI_CONFIG),
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    InputModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    SelectableModule
  ]
})
export class SelectableTestModule {
}
