import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArrayPipesModule } from '../../core/pipes/array-pipes.module';
import { TextPipesModule } from '../../core/pipes/text-pipes.module';
import { BadgeModule } from '../../elements/badge/badge.module';
import { IconModule } from '../../elements/icon/icon.module';
import { StackModule } from '../../layout/stack/stack.module';
import { AttributesDirective, FakeLinkDirective } from './directives';
import { LinkComponent } from './link.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule,
    IconModule,
    BadgeModule,
    StackModule,
    TextPipesModule,
    ArrayPipesModule
  ],
  exports: [
    LinkComponent
  ],
  entryComponents: [
    LinkComponent
  ],
  declarations: [
    LinkComponent,
    AttributesDirective,
    FakeLinkDirective
  ]
})
export class LinkModule {
}
