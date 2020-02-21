import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: TeamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule {
}
