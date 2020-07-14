import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {
  TabComponent,
  TimelineComponent,
  TimelineItemComponent,
  UI
} from 'junte-ui';
import { Language } from '../../shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-timeline-test',
  templateUrl: './timeline-test.component.html',
  styleUrls: ['./timeline-test.component.scss']
})
export class TimelineTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  languages = Language;
  types = {timeline: TimelineComponent, item: TimelineItemComponent};

  @ViewChild('code') code: TabComponent;

  iconControl = this.fb.control(false);
  colorControl = this.fb.control(this.ui.color.purpleLight);

  builder = this.fb.group({
    icon: this.iconControl,
    color: this.colorControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
