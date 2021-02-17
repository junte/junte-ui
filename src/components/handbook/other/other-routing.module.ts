import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherTestComponent } from './other-test.component';
import { loadChildren } from 'src/utils/routing';
import { ShortcutsTestComponent } from './shortcuts/shortcuts-test.component';
import { ConfirmTestComponent } from './confirm/confirm-test.component';
import { EmptyTestComponent } from './empty/empty-test.component';
import { MessageTestComponent } from './message/message-test.component';
import { PipesTestComponent } from './pipes/pipes-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Other'},
    children: [
      {
        path: '',
        component: OtherTestComponent,
      },
      {
        path: 'animations',
        loadChildren: () => loadChildren(import('./animations/animations-test.module')
          .then(m => m.AnimationsTestModule)),
        data: {breadcrumb: 'Animations', animation: 'Animations'}
      },
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
        path: 'empty',
        component: EmptyTestComponent,
        data: {breadcrumb: 'Empty', animation: 'Message'}
      },
      {
        path: 'message',
        component: MessageTestComponent,
        data: {breadcrumb: 'Message', animation: 'Message'}
      },
      {
        path: 'shortcuts',
        component: ShortcutsTestComponent,
        data: {breadcrumb: 'Shortcuts', animation: 'Shortcuts'}
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
