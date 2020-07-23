import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  ArrayPipesModule,
  FormModule,
  GridModule,
  IconModule,
  LinkModule,
  ResponsiveModule,
  SelectModule,
  StackModule,
  TabsModule,
  SwitcherModule,
  CheckboxModule,
  CardModule,
  SkeletonModule,
  MenuModule,
  AvatarModule
} from 'junte-ui';
import { CardTestComponent } from './card-test.component';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    SwitcherModule.forRoot(JUNTE_UI_CONFIG),
    CheckboxModule.forRoot(JUNTE_UI_CONFIG),
    CardModule.forRoot(JUNTE_UI_CONFIG),
    SkeletonModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG),
    AvatarModule.forRoot(JUNTE_UI_CONFIG),
    ResponsiveModule,
    ArrayPipesModule,
    SharedModule
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
