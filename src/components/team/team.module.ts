import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { JunteUiModule } from 'junte-ui';
import { TeamRoutingModule } from './team-routing.module';
import { AppFooterModule } from '../footer/app-footer.module';

@NgModule({
  declarations: [TeamComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    TeamRoutingModule,
    AppFooterModule
  ]
})
export class TeamModule { }
