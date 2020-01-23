import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { PaginationComponent, UI, TabComponent } from 'junte-ui';
import { LocalUI } from '../../../../enums/local-ui';

const DEFAULT_COUNT = 5;
const DEFAULT_PAGE = 1;

@Component({
  selector: 'app-pagination-test',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.scss']
})
export class PaginationTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  pager = PaginationComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  countControl = new FormControl(DEFAULT_COUNT);
  pageControl = new FormControl(DEFAULT_PAGE);

  form = this.fb.group({
    count: this.countControl,
  });

  previewForm = this.fb.group({
    page: this.pageControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.countControl.valueChanges.subscribe(() => {
      this.code.flash();
      this.pageControl.patchValue(DEFAULT_PAGE);
    });
  }
}
