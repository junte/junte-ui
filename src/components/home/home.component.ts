import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Breakpoint, BreakpointService, PopoverComponent, PopoverService, UI } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  opened = false;
  point = Breakpoint;
  @ViewChild('popover', {static: true}) popover: PopoverComponent;

  constructor(public breakpoint: BreakpointService,
              private popoverService: PopoverService) {
  }

  ngAfterViewInit() {
    this.popoverService.register(this.popover);
  }
}
