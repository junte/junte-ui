import { AfterViewInit, Component, ElementRef, HostBinding, Input, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isArray } from 'util';

const PATTERN = /^HTTP|HTTP|http(s)?:\/\/(www\.)?[A-Za-z0-9]+([\-\.]{1}[A-Za-z0-9]+)*\.[A-Za-z]{2,40}(:[0-9]{1,40})?(\/.*)?$/;
const ALLOW_TARGETS = ['_blank', '_self', '_parent', '_top'];
const TARGET_DEFAULT = '_self';

@Component({
  selector: 'jnt-link',
  templateUrl: './encapsulated.html'
})
export class LinkComponent implements AfterViewInit {

  @HostBinding('attr.host') readonly host = 'jnt-link-host';

  @Input() source: string | any;
  @Input() target: string;

  @HostBinding('attr.fluid')
  @Input() fluid = false;

  @ViewChild('a') element: ElementRef;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private renderer: Renderer2) {

  }

  ngAfterViewInit() {
    if (!!this.source) {
      this.renderer.setAttribute(this.element.nativeElement, 'href',
        isArray(this.source) ? this.source.join('/') : this.source);
    }
  }

  goTo(event) {
    event.preventDefault();
    if (!isArray(this.source) && this.source.match(PATTERN)) {
      open(this.source, ALLOW_TARGETS.includes(this.target) ? this.target : TARGET_DEFAULT);
    } else {
      this.router.navigate(isArray(this.source) ? this.source : [this.source]);
    }
  }

}
