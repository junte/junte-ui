import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const MIN_WIDTH = 20;
const CHAR_WIDTH = 8;

@Directive({
  selector: '[jntSmartWidth]'
})
export class SmartWidthDirective implements AfterViewInit {

  private host: HTMLInputElement;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.host = this.element.nativeElement;
  }

  @HostListener('keyup')
  @HostListener('focusout')
  fitWidth() {
    const length = this.host.value.length;
    if (length > 0) {
      const width = Math.max((length + 1) * CHAR_WIDTH, MIN_WIDTH);
      this.renderer.setStyle(this.host, 'width', width + 'px');
    } else {
      this.renderer.removeStyle(this.host, 'width');
    }
  }
}

