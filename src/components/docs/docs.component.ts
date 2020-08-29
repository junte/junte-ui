import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';

export enum Theme {
  light = 'light',
  dark = 'dark'
}

@Component({
  selector: 'app-documentation',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  theme = Theme;

  loading = false;
  themeControl = new FormControl(localStorage.theme || Theme.light);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.themeControl.valueChanges
      .subscribe(theme => {
        if (theme !== Theme.light) {
          localStorage.setItem('theme', theme);
        } else {
          localStorage.removeItem('theme');
        }
      });
  }
}
