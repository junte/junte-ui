import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalComponent, ModalService, PopoverComponent, PopoverService, UI } from 'junte-ui';

enum Themes {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  private _theme = Themes.light;
  ui = UI;
  loading = false;
  themes = Themes;

  set theme(theme: Themes) {
    this._theme = theme;
    this.load(theme);
  }

  get theme() {
    return this._theme;
  }

  @ViewChild('popover') popover: PopoverComponent;
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService) {
  }

  ngOnInit() {
    this._theme = localStorage.getItem('theme');
  }

  ngAfterViewInit() {
    this.modalService.register(this.modal);
    this.popoverService.register(this.popover);
  }

  private load(theme: Themes) {
    this.loading = true;
    window['themes'](theme, () => this.loading = false);
  }
}
