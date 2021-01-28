import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { moveFromRight, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-animations-test',
  templateUrl: './animations-test.component.html',
  styleUrls: ['./animations-test.component.scss'],
  animations: [moveFromRight]
})
export class AnimationsTestComponent {

  ui = UI;
  localUi = LocalUI;
  handbook = HANDBOOK;

  @ViewChild('code') code: TabComponent;

  enterTimingControl = this.fb.control(1);
  leaveTimingControl = this.fb.control(1);

  builder = this.fb.group({
    enterTiming: this.enterTimingControl,
    leaveTiming: this.leaveTimingControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  animate(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.animation;
  }
}
