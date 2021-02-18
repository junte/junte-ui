import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from '../../forms/button/button.module';
import { FormModule } from '../../forms/form/form.module';
import { StackModule } from '../../layout/stack/stack.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  declarations: [
    EmptyComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    FormModule,
    StackModule,
    TranslateModule
  ],
  exports: [
    EmptyComponent
  ]
})
export class EmptyModule {
}
