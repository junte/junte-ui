import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmTestComponent } from './confirm/confirm-test.component';
import { MessageTestComponent } from './message/message-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Other'},
    children: [
      {
        path: 'pipes',
        component: PipesTestComponent,
        data: {breadcrumb: 'Pipes', animation: 'Pipes'}
      },
      {
        path: 'confirm',
        component: ConfirmTestComponent,
        data: {breadcrumb: 'Confirm', animation: 'Confirm'}
      },
      {
        path: 'message',
        component: MessageTestComponent,
        data: {breadcrumb: 'Message', animation: 'Message'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule {
}
