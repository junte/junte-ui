import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef
} from '@angular/core';
import { UI } from 'junte-ui';
import { Gutter } from 'projects/junte-ui/src/lib/core/enums/gutter';

@Component({
  selector: 'app-browser-preview',
  templateUrl: './browser-preview.component.html',
  styleUrls: ['./browser-preview.component.scss']
})
export class BrowserPreviewComponent implements AfterViewInit {

  ui = UI;

  width: number;
  height: number;

  @HostBinding('attr.data-padding')
  _padding = Gutter.normal;

  @Input() set padding(padding: Gutter) {
    this._padding = padding || Gutter.normal;
  }

  @ContentChild('document')
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
