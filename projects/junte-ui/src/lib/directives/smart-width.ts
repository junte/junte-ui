import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

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

  @HostListener('keydown') changed() {
    this.renderer.setStyle(this.host, 'width', (this.host.value.length + 3) * 8 + 'px');
  }
}

