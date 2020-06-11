import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StackModule, LinkModule} from 'junte-ui';
import { ResourcesComponent } from './resources.component';
import { AnalyticsDirectivesModule } from 'src/directives/analytics.module';

@NgModule({
  declarations: [ResourcesComponent],
  imports: [
    CommonModule,
    StackModule,
    LinkModule,
    AnalyticsDirectivesModule
  ],
  exports: [ResourcesComponent]
})
export class ResourcesModule {
}
