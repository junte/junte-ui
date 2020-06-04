import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { PagerComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  types = {pager: PagerComponent};

  countControl = this.fb.control(5);
  pageControl = this.fb.control(1);
  builder = this.fb.group({
    count: this.countControl,
  });

  form = this.fb.group({
    page: this.pageControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.countControl.valueChanges.subscribe(() => {
      this.code.flash();
      this.pageControl.patchValue(1);
    });
  }
}
