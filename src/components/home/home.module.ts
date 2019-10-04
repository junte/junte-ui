import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { JunteUiModule } from 'junte-ui';
import { HomeRoutingModule } from './home-routing.module';
import { PrismModule } from '@ngx-prism/core';
import { AppFooterModule } from '../app-footer/app-footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    HomeRoutingModule,
    PrismModule,
    AppFooterModule
  ]
})
export class HomeModule { }
