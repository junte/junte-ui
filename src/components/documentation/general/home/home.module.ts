import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'junte-ui';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    PrismModule,
    JunteUiModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent],
})
export class HomeModule {
}

