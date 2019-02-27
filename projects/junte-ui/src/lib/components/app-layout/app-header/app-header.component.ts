import {AfterContentInit, Component, ContentChild, Host, HostBinding, Input, OnInit, TemplateRef} from '@angular/core';
import {MenuComponent} from '../../menu/menu.component';
import {Sizes} from '../../../enum/ui';
import {UserbarComponent} from './userbar/userbar.component';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, AfterContentInit {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  @ContentChild(MenuComponent)
  menu: MenuComponent;

  @Input()
  logo: TemplateRef<void>;

  @ContentChild(UserbarComponent)
  userbar: UserbarComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
