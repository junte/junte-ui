import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpModule } from 'projects/junte-ui/src/lib/components/layout/lp/lp.module';
import { HomeComponent } from './home.component';
import { MenuModule, StackModule, LabelModule, GridModule, LinkModule } from 'junte-ui';
import { HomeRoutingModule } from './home-routing.module';
import { PrismModule } from '@ngx-prism/core';
import { AppFooterModule } from '../app-footer/app-footer.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MenuModule,
    StackModule,
    GridModule,
    LabelModule,
    LinkModule,
    HomeRoutingModule,
    LpModule,
    PrismModule,
    AppFooterModule
  ]
})
export class HomeModule { }
