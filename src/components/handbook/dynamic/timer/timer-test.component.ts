import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TimerComponent, UI, TabsComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-timer-test',
  templateUrl: './timer-test.component.html',
  styleUrls: ['./timer-test.component.scss']
})
export class TimerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  handbook = HANDBOOK;
  seconds = 9;
  minutes = 0;
  hours = 0;
  days = 0;
  finished = 0;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/dynamic/chart';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2616%3A70';

  @ViewChild('timer')
  timer: TimerComponent;

  @ViewChild('tabs') tabs: TabsComponent;

  startControl = this.fb.control(new Date);
  endControl = this.fb.control(new Date);
  currentControl = this.fb.control(null);

  builder = this.fb.group({
    start: this.startControl,
    end: this.endControl,
    current: this.currentControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}

