import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ],
  exports: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ]
})
export class AvatarModule {
}
