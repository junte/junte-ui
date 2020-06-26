import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ThemingComponent } from './theming/theming.component';
import { TypographyTestComponent } from './typography/typography-test.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: '',
    data: {breadcrumb: 'General'},
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {breadcrumb: 'Home', animation: 'Home'}
      },
      {
        path: 'theming',
        component: ThemingComponent,
        data: {breadcrumb: 'Theming', animation: 'Theming'}
      },
      {
        path: 'typography',
        component: TypographyTestComponent,
        data: {breadcrumb: 'Typography', animation: 'Typography'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralRoutingModule {

}
