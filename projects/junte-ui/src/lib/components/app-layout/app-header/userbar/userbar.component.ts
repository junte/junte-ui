import {Component, ContentChild, OnInit} from '@angular/core';
import {AvatarComponent} from '../../../avatar/avatar.component';
import {MenuComponent} from '../../../menu/menu.component';

@Component({
  selector: 'jnt-userbar',
  templateUrl: './userbar.component.html',
  styleUrls: ['./userbar.component.scss']
})
export class UserbarComponent implements OnInit {

  @ContentChild(AvatarComponent)
  avatar: AvatarComponent;

  @ContentChild(MenuComponent)
  usermenu: MenuComponent;

  constructor() {
  }

  ngOnInit() {
  }

}
