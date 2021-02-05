import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MetrikaModule } from 'ng-yandex-metrika';
import { AnalyticsDirective } from './analytics';

@NgModule({
  declarations: [
    AnalyticsDirective
  ],
  imports: [
    CommonModule,
    MetrikaModule.forRoot({
      id: 64371454,
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: false
    })
  ],
  exports: [
    AnalyticsDirective
  ]
})

export class AnalyticsDirectivesModule {
}
