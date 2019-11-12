import { Component } from '@angular/core';
import { UI } from '../../../projects/junte-ui/src/lib/enum/ui';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {

  ui = UI;
}
