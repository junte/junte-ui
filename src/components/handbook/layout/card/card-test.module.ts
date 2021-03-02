import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ArrayPipesModule,
  AvatarModule,
  ButtonModule,
  CardModule,
  CheckboxModule,
  FormModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  MenuModule,
  ResponsiveModule,
  SelectModule,
  SkeletonModule,
  StackModule,
  SwitcherModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { CardTestComponent } from './card-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule,
    LinkModule,
    StackModule,
    TabsModule,
    LabelModule,
    GridModule,
    FormModule,
    AccordionModule,
    SelectModule,
    SwitcherModule,
    CheckboxModule,
    CardModule,
    SkeletonModule,
    MenuModule,
    AvatarModule,
    ResponsiveModule,
    ArrayPipesModule,
    SharedModule,
    ButtonModule,
    AppLayoutModule
  ],
  exports: [
    CardTestComponent
  ],
  declarations: [
    CardTestComponent
  ],
})
export class CardTestModule {
}
