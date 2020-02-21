import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, LabelModule, LinkModule, MenuModule, StackModule, LpModule } from 'junte-ui';
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
