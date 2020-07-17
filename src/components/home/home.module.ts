import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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
    TranslateModule,
    LpModule,
    StackModule,
    GridModule,
    LinkModule,
    ButtonModule,
    IconModule,
    MenuModule,
    LabelModule,
    PopoverModule.forRoot(JUNTE_UI_CONFIG),
    HomeRoutingModule,
    ResponsiveModule,
    ArrayPipesModule,
    AnalyticsDirectivesModule
  ]
})
export class HomeModule {

}
