import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { JunteUiModule } from 'junte-ui';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    JunteUiModule,
    ContactsRoutingModule,
  ]
})
export class ContactsModule { }
