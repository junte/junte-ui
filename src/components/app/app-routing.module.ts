import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'documentation',
    data: {breadcrumb: 'Junte UI'},
    loadChildren: '../documentation/documentation.module#DocumentationModule'
  },
  {
    path: 'home',
    data: {breadcrumb: 'Home'},
    loadChildren: '../home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
