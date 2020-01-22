import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToUseComponent } from './how-to-use.component';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  imports: [
    CommonModule,
    PrismModule
  ],
  exports: [HowToUseComponent],
  declarations: [HowToUseComponent],
  providers: [],
})
export class HowToUseModule {
}

