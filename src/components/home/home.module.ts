import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
  ArrayPipesModule,
  BadgeModule,
  ButtonModule,
  GridModule,
  IconModule,
  LabelModule,
  LinkModule,
  LpModule,
  MenuModule,
  PopoverModule,
  ResponsiveModule,
  StackModule,
} from 'junte-ui';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LpModule,
    StackModule,
    GridModule,
    LinkModule,
    ButtonModule,
    IconModule,
    MenuModule,
    LabelModule,
    PopoverModule,
    HomeRoutingModule,
    ResponsiveModule,
    ArrayPipesModule,
    AnalyticsDirectivesModule,
    ReactiveFormsModule,
    FormsModule,
    BadgeModule
  ]
})
export class HomeModule {

}
