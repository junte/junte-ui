import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[attributes]'
})

export class AttributesDirective {

  @Input()
  set attributes(attributes: { [key: string]: string }) {
    Object.keys(attributes || {}).forEach(name => this.renderer
      .setAttribute(this.hostRef.nativeElement, name, attributes[name]));
  }

  constructor(private hostRef: ElementRef,
              private renderer: Renderer2) {
  }

}

@Directive({
  selector: '[fakeLink]'
})

export class FakeLinkDirective {

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    event.preventDefault();
  }

}
