import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Themes, UI } from '../../../projects/junte-ui/src/lib/enum/ui';
import { PopoverComponent } from '../../../projects/junte-ui/src/lib/components/popover/popover.component';
import { ModalComponent } from '../../../projects/junte-ui/src/lib/components/modal/modal.component';
import { ModalService } from '../../../projects/junte-ui/src/lib/components/modal/modal.service';
import { PopoverService } from '../../../projects/junte-ui/src/lib/components/popover/popover.service';

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
  checked = true;
  themeControl = new FormControl(null);

  themeForm = this.fb.group({
    theme: this.themeControl
  });

  set theme(theme: Themes) {
    this._theme = theme;
    this.load(theme);
  }

  get theme() {
    return this._theme;
  }

  @ViewChild('popover', {static: false}) popover: PopoverComponent;
  @ViewChild('modal', {static: false}) modal: ModalComponent;
  @ViewChild('layout', {read: ElementRef, static: true}) backdrop;

  constructor(private modalService: ModalService,
              private popoverService: PopoverService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this._theme = Themes[localStorage.getItem('theme')];
    this.themeControl.setValue(this.theme);
    this.themeControl.valueChanges.subscribe(theme => this.theme = theme);
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
