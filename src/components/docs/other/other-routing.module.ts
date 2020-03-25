import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageTestComponent } from './message/message-test.component';
import { ConfirmTestComponent } from './confirm/confirm-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';

export const routes: Routes = [
  {
    path: 'pipes',
    component: PipesTestComponent,
    data: {breadcrumb: 'Pipes'}
  },
  {
    path: 'confirm',
    component: ConfirmTestComponent,
    data: {breadcrumb: 'Confirm'}
  },
  {
    path: 'message',
    component: MessageTestComponent,
    data: {breadcrumb: 'Message'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule {
}
