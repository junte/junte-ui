import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Breakpoint, BreakpointService, PopoverComponent, PopoverService, UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';
import { Theme } from '../docs/docs.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  opened = false;
  point = Breakpoint;
  themes = Theme;
  theme: Theme = localStorage.theme || Theme.light;
  @ViewChild('popover', {static: true}) popover: PopoverComponent;

  themeControl = new FormControl(this.theme !== Theme.dark);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(public breakpoint: BreakpointService,
              private popoverService: PopoverService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.themeControl.valueChanges.subscribe(checked => {
      this.theme = checked ? Theme.light : Theme.dark;
      if (this.theme !== Theme.light) {
        localStorage.setItem('theme', this.theme);
      } else {
        localStorage.removeItem('theme');
      }
    });
  }

  ngAfterViewInit() {
    this.popoverService.register(this.popover);
  }
}
