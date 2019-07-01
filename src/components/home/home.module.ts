import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JunteUiModule } from 'junte-ui';
import { HomeRoutingModule } from './home-routing.module';
import { PrismModule } from '@ngx-prism/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    HomeRoutingModule,
    PrismModule
  ]
})
export class HomeModule { }
