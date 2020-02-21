import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, LabelModule, LinkModule, MenuModule, StackModule } from 'junte-ui';
import { LpModule } from 'projects/junte-ui/src/lib/components/layout/lp/lp.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    GridModule,
    LinkModule,
    MenuModule,
    LpModule,
    LabelModule,
    HomeRoutingModule,
  ]
})
export class HomeModule {

}
