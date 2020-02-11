import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[jntFor]'
})
export class MediaQueryDirective {

  @Input() highlightColor: string;

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  // @Input('@for') attr: string;

}
