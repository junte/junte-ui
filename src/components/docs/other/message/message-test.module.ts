import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MessageModule,
  GridModule,
  LinkModule,
  StackModule,
  TabsModule,
  FormModule,
  SelectModule,
  AccordionModule,
  IconModule,
  DotModule
} from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { MessageTestComponent } from './message-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    MessageModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    FormModule.forRoot(JUNTE_UI_CONFIG),
    SelectModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    DotModule,
    SharedModule,
    ReactiveFormsModule,
    AnalyticsDirectivesModule
  ],
  exports: [
    MessageTestComponent
  ],
  declarations: [
    MessageTestComponent
  ]
})
export class MessageTestModule {
}
