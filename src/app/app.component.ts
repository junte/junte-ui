import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent, ModalService, UI } from 'junte-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ui = UI;

  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef}) backdrop;

  constructor(private modalService: ModalService) {
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
  }
}
