import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from 'src/components/documentation/shared/shared.module';
import { PopoverTestComponent } from './popover-test.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    FormsModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule
  ],
  exports: [PopoverTestComponent],
  declarations: [PopoverTestComponent]
})
export class PopoverTestModule {
}
