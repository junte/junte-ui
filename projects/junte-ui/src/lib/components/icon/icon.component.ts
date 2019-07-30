import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'jnt-icon',
  template: ''
})
export class IconComponent implements AfterViewInit {

  private url: string;
  @HostBinding('attr.host') readonly host = 'jnt-icon-host';

  @Input() set icon(icon: string) {
    const split = icon.split(':');
    if (split.length === 2) {
      this.url = `assets/${split[0]}/${split[1]}.svg`;
    } else {
      this.renderer.addClass(this.element.nativeElement, `icon-${icon}`);
    }
  }

  constructor(private http: HttpClient,
              private renderer: Renderer2,
              private element: ElementRef) {
  }

  ngAfterViewInit() {
    if (!!this.url) {
      this.http.get(this.url, {responseType: 'text'})
        .subscribe(svg => {
          const container = this.renderer.createElement('i');
          container.innerHTML = svg;
          this.renderer.appendChild(this.element.nativeElement, container);
        });
    }
  }
}
