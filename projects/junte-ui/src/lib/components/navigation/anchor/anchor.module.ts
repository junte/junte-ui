import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconModule } from 'projects/junte-ui/src/lib/components/elements/icon/icon.module';

import { AnchorComponent } from './anchor.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [AnchorComponent],
  declarations: [AnchorComponent]
})
export class AnchorModule {
}
