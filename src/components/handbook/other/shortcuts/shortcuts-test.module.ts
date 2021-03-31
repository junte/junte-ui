import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, FormModule, InputModule, LayoutModule, LinkModule, SelectModule, ShortcutsModule, TabsModule } from 'junte-ui';
import { SharedModule } from 'src/components/handbook/shared/shared.module';
import { ShortcutsTestComponent } from './shortcuts-test.component';


@NgModule({
  declarations: [ShortcutsTestComponent],
  imports: [
    CommonModule,
    ShortcutsModule,
    LayoutModule,
    TabsModule,
    InputModule,
    LinkModule,
    ReactiveFormsModule,
    SelectModule,
    AccordionModule,
    SharedModule,
    FormModule
  ]
})
export class ShortcutsTestModule {
}
