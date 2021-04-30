import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BreakpointService, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-documentation',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  theme = Theme;
  handbook = HANDBOOK;
  analyticsType = AnalyticsType;

  loading = false;
  themeControl = new FormControl(localStorage.theme || Theme.light);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
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

  hello() {
    console.log(this.route);
  }

}
