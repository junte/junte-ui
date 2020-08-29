import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ModalComponent, ModalService, PopoverComponent, PopoverService } from 'junte-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @HostBinding('attr.theme')
  get theme() {
    return localStorage.theme || null;
  }

  @ViewChild('popover', {static: true}) popover: PopoverComponent;
  @ViewChild('modal', {static: true}) modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef, static: true}) backdrop: ElementRef<HTMLElement>;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }

}
