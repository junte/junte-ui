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
  IconModule,
  PopoverModule
} from 'junte-ui';
import { JUNTE_UI_CONFIG } from 'src/consts';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

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
    PopoverModule.forRoot(JUNTE_UI_CONFIG),
    HomeRoutingModule,
    ResponsiveModule,
    ArrayPipesModule,
    AnalyticsDirectivesModule
  ]
})
export class HomeModule {

}
