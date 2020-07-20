import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CodeComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})
export class CodeTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;

  @ViewChild('code') code: TabComponent;

  countControl = this.fb.control(4);
  builder = this.fb.group({
    count: this.countControl,
  });

  form = this.fb.group({
    code: [],
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
