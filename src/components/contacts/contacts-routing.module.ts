import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {
}
