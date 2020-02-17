import { NgModule } from '@angular/core';
import { GeneralRoutingModule } from './general-routing.module';
import { HomeModule } from './home/home.module';
import { ThemingModule } from './theming/theming.module';
import { TypographyTestModule } from './typography/typography-test.module';

@NgModule({
  imports: [
    GeneralRoutingModule,
  ],
  exports: [
    ThemingModule,
    TypographyTestModule,
    HomeModule
  ]
})
export class GeneralModule {
}
