import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AccordionModule, AnchorModule, FormModule, GridModule, IconModule, LinkModule, StackModule, TabsModule} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { SharedModule } from '../../shared/shared.module';
import { AnchorTestComponent } from './anchor-test.component';

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
    AnchorModule.forRoot(JUNTE_UI_CONFIG),
    SharedModule
  ],
  exports: [
    AnchorTestComponent
  ],
  declarations: [
    AnchorTestComponent
  ],
})
export class AnchorTestModule {
}




