import { NgModule } from '@angular/core';
import { ForDirective, ForMaxDirective, ForMinDirective } from './pipes';

@NgModule({
  declarations: [
    ForDirective,
    ForMinDirective,
    ForMaxDirective
  ],
  exports: [
    ForDirective,
    ForMinDirective,
    ForMaxDirective
  ]
})
export class ResponsiveModule {

}
