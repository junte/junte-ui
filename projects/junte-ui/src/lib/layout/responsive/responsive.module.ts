import { NgModule } from '@angular/core';
import { ForDirective, ForMaxDirective, ForMinDirective } from './responsive.directives';

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
