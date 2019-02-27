import {AfterContentInit, Component, ContentChild, Host, HostBinding, Input, OnInit, TemplateRef} from '@angular/core';
import {MenuComponent} from '../../menu/menu.component';
import {Sizes} from '../../../enum/ui';
import {UserbarComponent} from './userbar/userbar.component';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  @ContentChild('topMenu')
  topMenu: TemplateRef<any>;

  @ContentChild('logo')
  logo: TemplateRef<any>;

  @ContentChild('userbar')
  userbar: TemplateRef<any>;

}
