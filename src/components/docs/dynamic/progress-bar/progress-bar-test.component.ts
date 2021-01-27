import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { ProgressBarComponent } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-progress-bar-test',
  templateUrl: './progress-bar-test.component.html',
  styleUrls: ['./progress-bar-test.component.scss']
})
export class ProgressBarTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {progress: ProgressBarComponent};
  categories = CATEGORIES;
  added = false;

  @ViewChild('code') code: TabComponent;

  valueControl = this.fb.control(50);
  legendControl = this.fb.control(true);

  builder = this.fb.group({
    value: this.valueControl,
    legend: this.legendControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
