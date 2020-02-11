import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ModalComponent, ModalService, PopoverComponent, PopoverService, UI } from 'junte-ui';
import { LocalUI } from '../../enums/local-ui';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  ui = UI;
  localUi = LocalUI;
  theme = Theme;

  loading = false;

  themeControl = new FormControl(localStorage.theme || Theme.light);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  @ViewChild('popover', {static: true}) popover: PopoverComponent;
  @ViewChild('modal', {static: true}) modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef, static: true}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.themeControl.valueChanges
      .subscribe(theme => {
        if (theme !== Theme.light) {
          localStorage.setItem('theme', theme);
          this.load(theme);
        } else {
          localStorage.removeItem('theme');
          this.load(null);
        }
      });
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }

  private load(theme: Theme) {
    this.loading = true;
    window['themes'](theme, () => this.loading = false);
  }
}
