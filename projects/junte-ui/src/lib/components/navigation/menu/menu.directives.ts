import {
  AfterViewInit,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  QueryList
} from '@angular/core';
import { LinkComponent } from '../link/link.component';
import { MenuItemComponent } from './menu-item.component';

@Directive({selector: '[jntSubMenuItems]'})
export class SubMenuItemsDirective {

  @HostBinding('style.top.px')
  top: number;
}

@Directive({selector: '[jntSubMenu]'})
export class SubMenuDirective implements AfterViewInit {

  @Input('jntSubMenu') item: MenuItemComponent;
  @Input() collapsed;

  @ContentChild(SubMenuItemsDirective)
  submenu: SubMenuItemsDirective;

  @ContentChildren(LinkComponent, {descendants: true})
  links: QueryList<LinkComponent>;

  @HostListener('mouseenter')
  onEnter() {
    if (!!this.submenu && this.collapsed) {
      this.submenu.top = this.host.nativeElement.offsetTop;
      this.item.opened = true;
    }
  }

  @HostListener('mouseleave')
  onLeave() {
    if (!!this.submenu && this.collapsed) {
      this.item.opened = false;
    }
  }

  constructor(private host: ElementRef) {
  }

  ngAfterViewInit() {
  }
}
