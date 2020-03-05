import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, LabelModule, LinkModule, StackModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { ThemingComponent } from './theming.component';

@NgModule({
  imports: [
    CommonModule,
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG)
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
