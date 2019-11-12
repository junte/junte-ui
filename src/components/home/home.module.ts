import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { PrismModule } from '@ngx-prism/core';
import { AppFooterModule } from '../app-footer/app-footer.module';
import { JunteUiModule } from '../../../projects/junte-ui/src/lib/junte-ui.module';

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
