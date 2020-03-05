import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, LinkModule, StackModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { TypographyTestComponent } from './typography-test.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG)
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
