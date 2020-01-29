import { NgModule } from '@angular/core';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonComponent } from './button.component';
import { CommonModule } from '@angular/common';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { AnimationPipeModule } from '../../../pipes/animation-pipe.module';
import { SpinnerModule } from '../../layout/spinner/spinner.module';
import { ButtonGroupComponent } from './group/button-group.component';

@NgModule({
  imports: [
    CommonModule,
    AnimationPipeModule,
    BadgeModule,
    IconModule,
    SpinnerModule,
    StackModule
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
  ],
  entryComponents: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent
  ]
})
export class ButtonModule {
}
