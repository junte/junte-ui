import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {OutletComponent} from 'src/components/outlet/outlet.component';

@NgModule({
  declarations: [
    OutletComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    OutletComponent
  ]
})
export class OutletModule {
}
