import { Component, OnInit, ViewChild } from '@angular/core';
import { UI } from 'junte-ui';
import { TabComponent } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { FormBuilder } from '@angular/forms';
import { SpinnerComponent } from 'junte-ui';

@Component({
  selector: 'app-spinner-test',
  templateUrl: './spinner-test.component.html',
  styleUrls: ['./spinner-test.component.scss']
})
export class SpinnerTestComponent implements OnInit {

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
