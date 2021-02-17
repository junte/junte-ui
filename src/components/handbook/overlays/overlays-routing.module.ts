import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlaysTestComponent } from './overlays-test.component';
import { ModalTestComponent } from './modal/modal-test.component';
import { PopoverTestComponent } from './popover/popover-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Overlays'},
    children: [
      {
        path: '',
        component: OverlaysTestComponent,
      },
      {
        path: 'modal',
        component: ModalTestComponent,
        data: {breadcrumb: 'Modal', animation: 'Modal'}
      },
      {
        path: 'popover',
        component: PopoverTestComponent,
        data: {breadcrumb: 'Popover', animation: 'Popover'}
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlaysRoutingModule {
}
