import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { DotTestComponent } from './dot/dot-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { LabelTestComponent } from './label/label-test.component';

export const routes: Routes = [
  {
    path: '',
    data: {breadcrumb: 'Elements'},
    children: [
      {
        path: 'icon',
        component: IconTestComponent,
        data: {breadcrumb: 'Icon', animation: 'Icon'}
      },
      {
        path: 'avatar',
        component: AvatarTestComponent,
        data: {breadcrumb: 'Avatar', animation: 'Avatar'}
      },
      {
        path: 'badge',
        component: BadgeTestComponent,
        data: {breadcrumb: 'Badge', animation: 'Badge'}
      },
      {
        path: 'label',
        component: LabelTestComponent,
        data: {breadcrumb: 'Label', animation: 'Label'}
      },
      {
        path: 'dot',
        component: DotTestComponent,
        data: {breadcrumb: 'Dot', animation: 'Dot'}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule {
}
