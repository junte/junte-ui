import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrismModule } from '@ngx-prism/core';
import { JunteUiModule } from 'projects/junte-ui/src/lib/junte-ui.module';
import { SharedModule } from 'src/components/documentation/shared/shared.module';
import { ModalTestFactoryComponent } from './test.component';

import { ModalTestComponent } from './modal-test.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JunteUiModule,
    SharedModule,
    PrismModule
  ],
  exports: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ],
  declarations: [
    ModalTestComponent,
    ModalTestFactoryComponent
  ],
  providers: [],
})
export class ModalTestModule {
}