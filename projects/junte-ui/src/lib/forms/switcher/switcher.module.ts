import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { DotModule } from '../../elements/dot/dot.module';
import { IconModule } from '../../elements/icon/icon.module';
import { SkeletonModule } from '../../layout/skeleton/skeleton.module';
import { StackModule } from '../../layout/stack/stack.module';
import { ButtonModule } from '../button/button.module';
import { CheckSelectedPipe } from './pipes';
import { SwitcherOptionComponent } from './switcher-option.component';
import { SwitcherComponent } from './switcher.component';

@NgModule({
  imports: [
    CommonModule,
    BadgeModule,
    DotModule,
    StackModule,
    IconModule,
    SkeletonModule,
    ArrayPipesModule,
    ButtonModule,
    TranslateModule
  ],
  declarations: [
    SwitcherComponent,
    SwitcherOptionComponent,
    CheckSelectedPipe
  ],
  entryComponents: [
    SwitcherComponent,
    SwitcherOptionComponent
  ],
  exports: [
    SwitcherComponent,
    SwitcherOptionComponent
  ]
})
export class SwitcherModule {
}
