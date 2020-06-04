import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {GridModule, IconModule, LinkModule, StackModule} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { TypographyTestComponent } from './typography-test.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    AnalyticsDirectivesModule
  ],
  exports: [
    TypographyTestComponent
  ],
  declarations: [
    TypographyTestComponent
  ],
})
export class TypographyTestModule {
}
