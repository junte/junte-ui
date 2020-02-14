import { AfterViewInit, ChangeDetectorRef, Component, ContentChild, ElementRef, HostListener, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-browser-preview',
  templateUrl: './browser-preview.component.html',
  styleUrls: ['./browser-preview.component.scss']
})
export class BrowserPreviewComponent implements AfterViewInit {

  width: number;
  height: number;

  @ContentChild('document', {static: false})
  documentTemplate: TemplateRef<any>;

  @HostListener('window:resize')
  resizing() {
    this.cd.detectChanges();
  }

  constructor(private cd: ChangeDetectorRef,
              public host: ElementRef<HTMLElement>) {
  }

  ngAfterViewInit() {
    this.width = this.host.nativeElement.clientWidth;
    this.height = this.host.nativeElement.clientHeight;
    this.cd.detectChanges();
  }

}
