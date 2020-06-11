import { Directive, HostListener, Input } from '@angular/core';
import { Metrika } from 'ng-yandex-metrika';
import { AnalyticsType } from 'src/enums/analyticsType';

class AnalitycsConfig {
  type: AnalyticsType;
  goal?: string;
}

/*
<button [analytics]="{type: Analitics.goal, goal: string}">Click for tracking</button>
 */

@Directive({
  selector: '[analytics]'
})

export class AnalyticsDirective {

  private _config: AnalitycsConfig;

  @Input('analytics')
  set config(config: AnalitycsConfig) {
    console.log('analytics');
    this._config = config;
  }

  constructor(public ym: Metrika) {
  }

  @HostListener('click')
  track() {
    // console.log('Track');
    switch (this._config.type) {
      case AnalyticsType.goal:
        // console.log(this._config.goal);
        this.ym.fireEvent(this._config.goal);
        break;
    }
  }

}
