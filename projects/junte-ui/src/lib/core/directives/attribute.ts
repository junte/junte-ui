import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[jntAttr]'
})
export class AttributeDirective implements OnInit {

  @Input('jntAttr')
  attr: string;

  constructor(private renderer: Renderer2,
              private host: ElementRef) {
  }

  ngOnInit() {
    this.renderer.setAttribute(this.host.nativeElement, this.attr, '');
  }

}
