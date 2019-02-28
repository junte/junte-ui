import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

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
    this.renderer.setStyle(this.measure, 'height', '0');
    this.renderer.setStyle(this.measure, 'whiteSpace', 'pre');
    this.renderer.setStyle(this.measure, 'fontFamily', this.host.style.fontFamily);
    this.renderer.appendChild(this.host.parentElement, this.measure);
    this.updateWidth();
  }

  @HostListener('keyup') changed() {
    this.updateWidth();
  }

  private updateWidth() {
    this.measure.innerHTML = this.host.value;

    const style = getComputedStyle(this.host, null);
    this.renderer.setStyle(this.measure, 'fontSize', style.getPropertyValue('font-size'));
    this.renderer.setStyle(this.measure, 'padding', style.getPropertyValue('padding'));

    const width = this.host.getBoundingClientRect().width + (this.measure.getBoundingClientRect().width - this.host.getBoundingClientRect().width) + 0.5;
    this.renderer.setStyle(this.host, 'width', `${width}px`);


    console.log('div', this.measure.getBoundingClientRect().width);
    console.log('input', this.host.getBoundingClientRect().width);
  }
}
