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
    loadChildren: () => import('../documentation/documentation.module').then(m => m.DocumentationModule)
  },
  {
    path: 'home',
    data: {breadcrumb: 'Home'},
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'contacts',
    data: {breadcrumb: 'Contacts'},
    loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
