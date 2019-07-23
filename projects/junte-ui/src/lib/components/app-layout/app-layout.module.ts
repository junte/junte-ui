import { NgModule } from '@angular/core';
import { AppAsideComponent } from './app-aside/app-aside.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppContentComponent } from './app-content/app-content.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { UserbarComponent } from './app-header/userbar/userbar.component';
import { AppSubHeaderComponent } from './app-sub-header/app-sub-header.component';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout.component';
import { IconModule } from '../icon/icon.module';
import { StackModule } from '../stack/stack.module';
import { ActionComponent } from './app-header/action/action.component';
import { ActionsComponent } from './app-header/actions/actions.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    StackModule,
    ButtonModule
  ],
  declarations: [
    ActionComponent,
    ActionsComponent,
    AppAsideComponent,
    AppBodyComponent,
    AppContentComponent,
    AppFooterComponent,
    AppHeaderComponent,
    UserbarComponent,
    AppSubHeaderComponent,
    AppLayoutComponent
  ],
  exports: [
    ActionComponent,
    ActionsComponent,
    AppAsideComponent,
    AppBodyComponent,
    AppContentComponent,
    AppFooterComponent,
    AppHeaderComponent,
    UserbarComponent,
    AppSubHeaderComponent,
    AppLayoutComponent
  ]
})
export class AppLayoutModule {
}
