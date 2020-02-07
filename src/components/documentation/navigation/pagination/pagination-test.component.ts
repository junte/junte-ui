import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PaginationComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-pagination-test',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.scss']
})
export class PaginationTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {pager: PaginationComponent};

  @ViewChild('code', {static: false}) code: TabComponent;

  countControl = this.fb.control(5);
  pageControl = this.fb.control(1);

  builder = this.fb.group({
    count: this.countControl,
  });

  form = this.fb.group({
    page: this.pageControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.countControl.valueChanges.subscribe(() => {
      this.code.flash();
      this.pageControl.patchValue(1);
    });
  }
}
