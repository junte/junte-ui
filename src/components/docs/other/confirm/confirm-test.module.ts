import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule, BlockModule, ConfirmModule, GridModule, IconModule, LinkModule, StackModule, TabsModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { ConfirmTestComponent } from './confirm-test.component';

@NgModule({
  imports: [
    CommonModule,
    ConfirmModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AccordionModule.forRoot(JUNTE_UI_CONFIG),
    TabsModule.forRoot(JUNTE_UI_CONFIG),
    BlockModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule,
  ],
  exports: [
    ConfirmTestComponent
  ],
  declarations: [
    ConfirmTestComponent
  ]
})
export class ConfirmTestModule {
}
