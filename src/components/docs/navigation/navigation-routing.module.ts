import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnchorTestComponent } from 'src/components/docs/navigation/anchor/anchor-test.component';
import { DropdownTestComponent } from 'src/components/docs/navigation/dropdown/dropdown-test.component';
import { LinkTestComponent } from 'src/components/docs/navigation/link/link-test.component';
import { MenuTestComponent } from 'src/components/docs/navigation/menu/menu-test.component';
import { PagerTestComponent } from 'src/components/docs/navigation/pager/pager-test.component';
import { TabsTestComponent } from 'src/components/docs/navigation/tabs/tabs-test.component';

export const routes: Routes = [
  {
    path: 'link',
    component: LinkTestComponent,
    data: {breadcrumb: 'Link'}
  },
  {
    path: 'menu',
    component: MenuTestComponent,
    data: {breadcrumb: 'Menu'}
  },
  {
    path: 'tabs',
    component: TabsTestComponent,
    data: {breadcrumb: 'Tabs'}
  },
  {
    path: 'pager',
    component: PagerTestComponent,
    data: {breadcrumb: 'Pager'}
  },
  {
    path: 'dropdown',
    component: DropdownTestComponent,
    data: {breadcrumb: 'Dropdown'}
  },
  {
    path: 'anchor',
    component: AnchorTestComponent,
    data: {breadcrumb: 'Anchor'}
  },
  {
    path: 'breadcrumbs',
    data: {breadcrumb: {label: 'Breadcrumbs'}},
    loadChildren: () => import('../navigation/breadcrumbs/breadcrumbs-test.module').then(m => m.BreadcrumbsTestModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule {
}
