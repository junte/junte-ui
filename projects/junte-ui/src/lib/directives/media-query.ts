import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[@for]',
})
export class MediaQueryDirective implements OnInit {

  @Input('jntFor') color = 'blue';

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', this.color);
  }

  ngOnInit() {

  }

}
