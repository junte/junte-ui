import { ContentChild, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({selector: '[jntSubMenuItems]'})
export class SubMenuItemsDirective {

  @HostBinding('style.top.px')
  top: number;

}

@Directive({selector: '[jntSubMenu]'})
export class SubMenuDirective {

  @ContentChild(SubMenuItemsDirective)
  item: SubMenuItemsDirective;

  @HostListener('mouseenter')
  onMouseEnter() {
    const position = this.host.nativeElement.getBoundingClientRect();
    this.item.top = position.top;
  }

  constructor(private host: ElementRef) {
  }
}
