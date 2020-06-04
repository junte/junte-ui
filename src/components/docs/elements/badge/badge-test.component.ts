import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BadgeComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-badge-test',
  templateUrl: './badge-test.component.html',
  styleUrls: ['./badge-test.component.scss']
})
export class BadgeTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {badge: BadgeComponent};

  @ViewChild('code') code: TabComponent;

  positionControl = this.fb.control(null);
  overflowControl = this.fb.control(null);
  valueControl = this.fb.control(5);
  colorControl = this.fb.control(this.ui.color.purple);
  textControl = this.fb.control(true);

  builder = this.fb.group({
    position: this.positionControl,
    overflow: this.overflowControl,
    value: this.valueControl,
    color: this.colorControl,
    text: this.textControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
