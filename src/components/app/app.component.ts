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

  constructor(private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.popoverService.register(this.popover);
  }

}
