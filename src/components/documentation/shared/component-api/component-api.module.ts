import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { ComponentApiComponent } from './component-api.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    JunteUiModule
  ],
  exports: [ComponentApiComponent],
  declarations: [ComponentApiComponent]
})
export class ComponentApiComponentModule {
}