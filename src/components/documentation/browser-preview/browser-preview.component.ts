import { ChangeDetectorRef, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-browser-preview',
  templateUrl: './browser-preview.component.html',
  styleUrls: ['./browser-preview.component.scss']
})
export class BrowserPreviewComponent {

  constructor(private cd: ChangeDetectorRef,
              public host: ElementRef<HTMLElement>) {

  }

  @HostListener('window:resize')
  resizing() {
    this.cd.markForCheck();
  }

}
