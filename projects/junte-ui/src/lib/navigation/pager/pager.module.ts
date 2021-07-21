import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconModule } from '../../elements/icon/icon.module';
import { SelectModule } from '../../forms/select/select.module';
import { StackModule } from '../../layout/stack/stack.module';
import { PagerComponent } from './pager.component';
import { FormatLinkPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IconModule,
    StackModule,
    SelectModule
  ],
  declarations: [
    PagerComponent,
    FormatLinkPipe
  ],
  entryComponents: [
    PagerComponent
  ],
  exports: [
    PagerComponent
  ]
})
export class PagerModule {
}
