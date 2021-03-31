import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Breakpoint, BreakpointService, moveFromRight, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-documentation',
  templateUrl: './handbook.component.html',
  styleUrls: ['./handbook.component.scss'],
  animations: [moveFromRight]
})
export class HandbookComponent implements OnInit {

  handbook = HANDBOOK;
  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  theme = Theme;

  loading = false;
  themeControl = new FormControl(localStorage.theme || Theme.light);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(private builder: FormBuilder,
              private breakpoint: BreakpointService) {
  }

  ngOnInit() {
    this.themeControl.valueChanges.subscribe(theme => {
      if (theme !== Theme.light) {
        localStorage.setItem('theme', theme);
      } else {
        localStorage.removeItem('theme');
      }
    });
  }

  animate(outlet: RouterOutlet) {
    return this.breakpoint.current === Breakpoint.mobile && outlet?.activatedRouteData?.animation;
  }
}
