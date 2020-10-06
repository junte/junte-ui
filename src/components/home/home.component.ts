import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Breakpoint, BreakpointService, PopoverComponent, UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';
import { Theme } from '../docs/docs.component';

enum Version {
  stable,
  unstable,
  next
}

type VersionsList = {
  latest: string,
  next: string,
  unstable: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  point = Breakpoint;
  themes = Theme;
  versions = Version;
  versionsList: VersionsList;

  opened = false;
  theme = localStorage.theme || Theme.light;
  version: Version = null;

  @ViewChild('popover', {static: true})
  popover: PopoverComponent;

  themeControl = new FormControl(this.theme !== Theme.dark);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(public breakpoint: BreakpointService,
              private builder: FormBuilder,
              private http: HttpClient) {
  }

  ngOnInit() {
    switch (document.location.hostname) {
      case 'www.junte-ui.com':
        this.version = Version.stable;
        break;
      case 'rc.junte-ui.com':
        this.version = Version.next;
        break;
      default:
        this.version = Version.unstable;
    }

    this.themeControl.valueChanges.subscribe(checked => {
      this.theme = checked ? Theme.light : Theme.dark;
      if (this.theme !== Theme.light) {
        localStorage.setItem('theme', this.theme);
      } else {
        localStorage.removeItem('theme');
      }
    });

    this.http.get('https://cors-anywhere.herokuapp.com/registry.npmjs.org/-/package/@junte/ui/dist-tags')
      .subscribe((versions: VersionsList) => this.versionsList = versions);
  }
}
