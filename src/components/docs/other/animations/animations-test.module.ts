import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AccordionModule,
  AppLayoutModule,
  ButtonModule,
  FormModule,
  GridModule,
  InputModule,
  LinkModule,
  StackModule,
  TabsModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsTestComponent } from './animations-test.component';
import { FirstRoutingComponent } from './first-routing/first-routing.component';
import { SecondRoutingComponent } from './second-routing/second-routing.component';

@NgModule({
  declarations: [
    AnimationsTestComponent,
    FirstRoutingComponent,
    SecondRoutingComponent
  ],
  exports: [AnimationsTestComponent],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
    ReactiveFormsModule,
    StackModule,
    LinkModule,
    GridModule,
    AppLayoutModule,
    SharedModule,
    TabsModule,
    FormModule,
    InputModule,
    AccordionModule,
    ButtonModule
  ]
})
export class AnimationsTestModule {
}
