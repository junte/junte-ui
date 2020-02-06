import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { SharedModule } from '../../shared/shared.module';
import { ChartTestComponent } from './chart-test.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [ChartTestComponent],
  declarations: [ChartTestComponent],
})
export class ChartTestModule {
}

