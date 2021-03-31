import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemingComponent } from './theming.component';

export const routes: Routes = [
  {
    path: '',
    component: ThemingComponent,
    data: {breadcrumb: 'Theming', animation: 'Theming'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemingRoutingModule {
}
