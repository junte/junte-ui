import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent, ModalService, PopoverComponent, PopoverService, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ui = UI;
  localUi = LocalUI;

  @ViewChild('popover', {static: true}) popover: PopoverComponent;
  @ViewChild('modal', {static: true}) modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef, static: true}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }

}
