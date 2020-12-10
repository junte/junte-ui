import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsTestComponent } from './animations-test.component';
import { FirstRoutingComponent } from './first-routing/first-routing.component';
import { SecondRoutingComponent } from './second-routing/second-routing.component';

export const routes: Routes = [
  {
    path: '',
    component: AnimationsTestComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first'
      },
      {
        path: 'first',
        component: FirstRoutingComponent,
        data: {animation: 'First'}
      },
      {
        path: 'second',
        component: SecondRoutingComponent,
        data: {animation: 'Second'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule {
}
