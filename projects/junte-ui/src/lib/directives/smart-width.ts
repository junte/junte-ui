import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const GUTTER_SIZE = 9;

@Directive({
  selector: '[jntSmartWidth]'
})
export class SmartWidthDirective implements AfterViewInit {

  private readonly host: HTMLInputElement;
  private measure: HTMLDivElement;

  constructor(host: ElementRef,
              private renderer: Renderer2) {
    this.host = host.nativeElement;
  }


  ngAfterViewInit() {
    this.measure = this.renderer.createElement('span');
    this.renderer.setStyle(this.measure, 'opacity', '0');
    this.renderer.setStyle(this.measure, 'border', '1px solid red');
    this.renderer.setStyle(this.measure, 'height', '0');
    this.renderer.setStyle(this.measure, 'whiteSpace', 'pre');
    this.renderer.setStyle(this.measure, 'fontFamily', this.host.style.fontFamily);
    this.renderer.appendChild(this.host.parentElement, this.measure);
    console.log('old div', this.measure.offsetWidth);
    console.log('old input', this.host.offsetWidth);
    this.updateWidth(this.measure.offsetWidth);
  }


  @HostListener('keyup') changed() {
    const old = this.measure.offsetWidth;
    console.log('old', old);
    console.log(this.measure.offsetWidth);
    console.log(this.host.offsetWidth);
    this.measure.innerHTML = this.host.value;

    // if (this.host.offsetWidth < (this.measure.offsetWidth + 0.5)) {
    this.updateWidth(old);

    // }
  }

  private updateWidth(old) {
    const style = getComputedStyle(this.host, null);


    //this.renderer.setStyle(this.measure, 'fontSize', style.getPropertyValue('font-size'));
    //this.renderer.setStyle(this.measure, 'padding', style.getPropertyValue('padding'));

    console.log('div', this.measure.offsetWidth);
    console.log('input', this.host.offsetWidth);


    const width = this.host.offsetWidth + (this.measure.offsetWidth - old) + 0.5;
    this.renderer.setStyle(this.host, 'width', `${width}px`);

  }
}
