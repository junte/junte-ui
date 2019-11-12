import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts-routing.module';
import { AppFooterModule } from '../app-footer/app-footer.module';
import { JunteUiModule } from '../../../projects/junte-ui/src/lib/junte-ui.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    ContactsRoutingModule,
    AppFooterModule
  ]
})
export class ContactsModule { }
