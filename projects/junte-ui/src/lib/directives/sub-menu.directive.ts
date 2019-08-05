import {
  AfterViewInit,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  QueryList
} from '@angular/core';
import { LinkComponent } from '../components/link/link.component';

@Directive({selector: '[jntSubMenuItems]'})
export class SubMenuItemsDirective {

  @HostBinding('style.top.px')
  top: number;

}

@Directive({selector: '[jntSubMenuTitle]'})
export class SubMenuTitleDirective {

  private _active = false;

  @HostBinding('attr.active')
  get active() {
    return this._active;
  }

  set active(active: boolean) {
    this._active = active;
  }

}

@Directive({selector: '[jntSubMenu]'})
export class SubMenuDirective implements AfterViewInit {

  @ContentChild(SubMenuItemsDirective)
  item: SubMenuItemsDirective;

  @ContentChild(SubMenuTitleDirective)
  title: SubMenuTitleDirective;

  @ContentChildren(LinkComponent, {descendants: true})
  links: QueryList<LinkComponent>;

  @HostListener('mouseenter')
  onEnter() {
    const position = this.host.nativeElement.getBoundingClientRect();
    this.item.top = position.top;
  }

  constructor(private host: ElementRef) {
  }

  ngAfterViewInit() {
  }
}


