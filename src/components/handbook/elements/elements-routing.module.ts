import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DotBenchmarkComponent } from 'src/components/handbook/elements/dot/benchmark/dot-benchmark.component';
import { ButtonBenchmarkComponent } from 'src/components/handbook/forms/button/benchmark/button-benchmark.component';
import { ButtonTestComponent } from 'src/components/handbook/forms/button/button-test.component';
import { AvatarTestComponent } from './avatar/avatar-test.component';
import { BadgeTestComponent } from './badge/badge-test.component';
import { DotTestComponent } from './dot/dot-test.component';
import { IconTestComponent } from './icon/icon-test.component';
import { LabelTestComponent } from './label/label-test.component';
import { PictureTestComponent } from './picture/picture-test.component';

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
        path: 'picture',
        component: PictureTestComponent,
        data: {breadcrumb: 'Picture', animation: 'Picture'}
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
        data: {breadcrumb: 'Dot'},
        children: [
          {
            path: '',
            component: DotTestComponent,
            data: {animation: 'Dot'}
          },
          {
            path: 'benchmark',
            component: DotBenchmarkComponent,
            data: {breadcrumb: 'Benchmark'}
          }
        ]
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
