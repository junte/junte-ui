import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PaginationComponent, UI } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

const DEFAULT_COUNT = 5;
const DEFAULT_PAGE = 1;

@Component({
  selector: 'app-pager-test',
  templateUrl: './pager-test.component.html',
  styleUrls: ['./pager-test.component.scss']
})
export class PagerTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  pager = PaginationComponent;

  countControl = new FormControl(DEFAULT_COUNT);
  pageControl = new FormControl(DEFAULT_PAGE);

  pagerBuilder = this.builder.group({
    count: this.countControl,
  });

  form = this.builder.group({
    page: this.pageControl,
  });

  constructor(private builder: FormBuilder) {
  }

  ngOnInit() {
    this.countControl.valueChanges.subscribe(() => this.pageControl.patchValue(DEFAULT_PAGE));
  }
}
