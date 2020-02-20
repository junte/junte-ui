import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LabelModule, LinkModule, StackModule, GridModule } from 'junte-ui';
import { ThemingComponent } from './theming.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule,
    LinkModule,
    StackModule,
    GridModule
  ],
  exports: [
    ThemingComponent
  ],
  declarations: [
    ThemingComponent
  ],
})
export class ThemingModule {
}
