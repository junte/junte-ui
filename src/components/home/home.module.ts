import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ArrayPipesModule,
  GridModule,
  LabelModule,
  LinkModule,
  LpModule,
  MenuModule,
  StackModule,
  ResponsiveModule,
  ButtonModule,
  IconModule
} from 'junte-ui';
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
    ButtonModule.forRoot(JUNTE_UI_CONFIG),
    IconModule.forRoot(JUNTE_UI_CONFIG),
    MenuModule.forRoot(JUNTE_UI_CONFIG),
    LabelModule.forRoot(JUNTE_UI_CONFIG),
    HomeRoutingModule,
    ResponsiveModule,
    ArrayPipesModule
  ]
})
export class HomeModule {

}
