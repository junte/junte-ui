import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypographyComponent } from './typography.component';

export const routes: Routes = [
  {
    path: '',
    component: TypographyComponent,
    data: {breadcrumb: 'Typography', animation: 'Typography'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographyRoutingModule {
}
