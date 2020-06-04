import { Component, OnInit, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { FormBuilder } from '@angular/forms';
import { SpinnerComponent } from 'junte-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.scss']
})
export class SpinnerTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {spinner: SpinnerComponent};

  @ViewChild('code') code: TabComponent;


  sizeControl = this.fb.control(null);

  builder = this.fb.group({
    size: this.sizeControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
