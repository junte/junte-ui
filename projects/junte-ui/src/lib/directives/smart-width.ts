import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

const GUTTER_SIZE = 9;

@Directive({
  selector: '[jntSmartWidth]'
})
export class SmartWidthDirective implements AfterViewInit {

  private readonly host: HTMLInputElement;
  private measure: HTMLDivElement;
  private widthpress: number;
  private widthup: number;

  constructor(host: ElementRef,
              private renderer: Renderer2) {
    this.host = host.nativeElement;
  }


  ngAfterViewInit() {
    this.measure = this.renderer.createElement('span');
    this.renderer.setStyle(this.measure, 'opacity', '1');
    this.renderer.setStyle(this.measure, 'border', '1px solid red');
    this.renderer.setStyle(this.measure, 'height', '0');
    this.renderer.setStyle(this.measure, 'whiteSpace', 'pre');
    this.renderer.setStyle(this.measure, 'fontFamily', this.host.style.fontFamily);
    this.renderer.appendChild(this.host.parentElement, this.measure);
    // this.updateWidth();
  }


  @HostListener('keydown') changed() {

    this.measure.innerHTML = this.host.value;
    console.log(this.measure.innerHTML);
    console.log('div down', this.measure.offsetWidth);
    console.log('input down', this.host.offsetWidth);
    // const width1 = this.measure.offsetWidth + 10;
    // this.renderer.setStyle(this.measure, 'width', `${width1}px`);
    // if (this.host.offsetWidth < (this.measure.offsetWidth)) {
    //this.updateWidth();
    // }
  }


  @HostListener('keypress') changedwidth() {
    this.measure.innerHTML = this.host.value;
    console.log('div press', this.measure.offsetWidth);
    console.log('input press', this.host.offsetWidth);
    this.widthpress = this.host.offsetWidth;
    // if (this.host.offsetWidth < (this.measure.offsetWidth)) {
    // this.updateWidth();
    // }
  }

  @HostListener('keyup') changedwidth1() {
    this.measure.innerHTML = this.host.value;
    this.widthup = this.measure.offsetWidth;
    console.log('div up', this.measure.offsetWidth);
    console.log('input up', this.host.offsetWidth);
    this.updateWidth();
  }

  private updateWidth() {
    const style = getComputedStyle(this.host, null);


    //this.renderer.setStyle(this.measure, 'fontSize', style.getPropertyValue('font-size'));
    //this.renderer.setStyle(this.measure, 'padding', style.getPropertyValue('padding'));

    if (this.host.offsetWidth < (this.measure.offsetWidth)) {
    const width = this.measure.offsetWidth + (this.widthup - this.widthpress);
    this.renderer.setStyle(this.host, 'width', `${width}px`);
    }

    console.log(this.widthup - this.widthpress);
    console.log('div update', this.measure.offsetWidth);
    console.log('input update', this.host.offsetWidth);

    // this.widthpress = 0;
    // this.widthup = 0;
  }
}

