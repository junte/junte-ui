import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { isArray } from 'util';

const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];

@Directive({
  selector: '[jntLink]'
})
export class LinkDirective implements AfterViewInit {
  private host: HTMLElement;

  @Input('jntLink')
  set link(link: string) {
    const pattern = /^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$/;
    if (!!link) {
      this.renderer.setAttribute(this.element.nativeElement,
        !isArray(link) && link.match(pattern) ? 'href' : isArray(link) ? '[routerLink]' : 'routerLink', link);
    }
  }

  @Input('jntTarget')
  set target(target: string) {
    if (!!target && ALLOW_TARGETS.includes(target)) {
      this.renderer.setAttribute(this.element.nativeElement, 'target', target);
    }
  }

  constructor(private renderer: Renderer2,
              private element: ElementRef) {
  }

  ngAfterViewInit() {
    this.host = this.element.nativeElement;
  }

}
