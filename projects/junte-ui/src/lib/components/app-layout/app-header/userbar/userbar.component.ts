import {Component, ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.scss']
})
export class UserbarComponent {

  @ContentChild('avatar')
  avatar: TemplateRef<any>;

  @ContentChild('userMenu')
  userMenu: TemplateRef<any>;

}
