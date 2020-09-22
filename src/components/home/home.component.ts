import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms';
import {Breakpoint, BreakpointService, PopoverComponent, UI} from 'junte-ui';
import {AnalyticsType} from 'src/enums/analyticsType';
import {LocalUI} from 'src/enums/local-ui';
import {Theme} from '../docs/docs.component';

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
  versions = [
    {
      title: 'UNSTABLE',
      link: 'http://localhost:4200'
    },
    {
      title: 'STABLE',
      link: 'https://junte-ui.com'
    },
    {
      title: 'NEXT',
      link: 'https://rc.junte-ui.com'
    }
  ];

  opened = false;
  theme: Theme = localStorage.theme || Theme.light;
  @ViewChild('popover', {static: true})
  popover: PopoverComponent;

  themeControl = new FormControl(this.theme !== Theme.dark);
  themeForm = this.builder.group({
    theme: this.themeControl
  });

  constructor(public breakpoint: BreakpointService,
              private builder: FormBuilder) {
  }

  ngOnInit() {
    this.versions = this.versions.map(version => ({
      title: version.title,
      link: version.link.includes(location.origin) ? null : version.link
    }));
    this.themeControl.valueChanges.subscribe(checked => {
      this.theme = checked ? Theme.light : Theme.dark;
      if (this.theme !== Theme.light) {
        localStorage.setItem('theme', this.theme);
      } else {
        localStorage.removeItem('theme');
      }
    });
  }
}
