import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DotModule } from '../dot/dot.module';
import { IconModule } from '../icon/icon.module';
import { AvatarComponent } from './avatar.component';
import { AvatarsGroupComponent } from './avatars-group/avatars-group.component';
import { AvatarsListComponent } from './avatars-list/avatars-list.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    DotModule
  ],
  declarations: [
    AvatarComponent,
    AvatarsGroupComponent,
    AvatarsListComponent
  ],
  entryComponents: [
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
