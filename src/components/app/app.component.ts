import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent, ModalService, PopoverComponent, PopoverService, UI } from 'junte-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ui = UI;
  loading: { [name: string]: boolean } = {};

  @ViewChild('popover') popover: PopoverComponent;
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }

  setTheme(theme: string = null) {
    this.loading[theme] = true;
    window['themes'](theme, () => this.loading[theme] = false);
  }
}
