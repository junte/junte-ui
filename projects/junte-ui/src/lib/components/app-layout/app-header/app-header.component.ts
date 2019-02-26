import {AfterContentInit, Component, ContentChild, Host, HostBinding, Input, OnInit, TemplateRef} from '@angular/core';
import {MenuComponent} from '../../menu/menu.component';
import {Sizes} from '../../../enum/ui';

@Component({
  selector: 'jnt-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, AfterContentInit {

  @HostBinding('attr.fixed')
  @Input()
  fixed = false;

  @ContentChild('top')
  menu: MenuComponent;

  @Input()
  logo: TemplateRef<void>;

  @Input()
  userbar: TemplateRef<void>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
  }

}
