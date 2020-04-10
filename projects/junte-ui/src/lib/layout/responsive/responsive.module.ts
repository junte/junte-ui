import { NgModule } from '@angular/core';
import { BreakpointService } from './breakpoint.service';
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
  ],
  providers: [
    BreakpointService
  ]
})
export class ResponsiveModule {

}
