import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { LabelTestComponent } from './label/label-test.component';

export const routes: Routes = [
  {
    path: 'icon',
    component: IconTestComponent,
    data: {breadcrumb: 'Icon'}
  },
  {
    path: 'avatar',
    component: AvatarTestComponent,
    data: {breadcrumb: 'Avatar'}
  },
  {
    path: 'badge',
    component: BadgeTestComponent,
    data: {breadcrumb: 'Badge'}
  },
  {
    path: 'label',
    component: LabelTestComponent,
    data: {breadcrumb: 'Label'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
