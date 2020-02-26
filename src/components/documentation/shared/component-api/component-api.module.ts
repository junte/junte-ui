import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JunteUiModule } from 'junte-ui';
import { ComponentApiComponent } from './component-api.component';

@NgModule({
  imports: [
    CommonModule,
    JunteUiModule
  ],
  exports: [ComponentApiComponent],
  declarations: [ComponentApiComponent]
})
export class ComponentApiComponentModule {
}
