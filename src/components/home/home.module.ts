import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule, LabelModule, LinkModule, LpModule, MenuModule, StackModule } from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LpModule.forRoot(JUNTE_UI_CONFIG),
    StackModule.forRoot(JUNTE_UI_CONFIG),
    GridModule.forRoot(JUNTE_UI_CONFIG),
    LinkModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    HomeRoutingModule
  ]
})
export class HomeModule {

}
