import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LinkModule, StackModule, GridModule } from 'junte-ui';
import { TypographyTestComponent } from './typography-test.component';

@NgModule({
  imports: [
    CommonModule,
    LinkModule,
    StackModule,
    GridModule
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
