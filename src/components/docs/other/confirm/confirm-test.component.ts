import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum ContentType {
  popover = 'popover',
  modal = 'modal'
}

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.scss']
})
export class ConfirmTestComponent  implements OnInit {

  ui = UI;
  localUi = LocalUI;
  contentType = ContentType;

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(ContentType.modal);

  builder = this.fb.group({
    type: this.typeControl
  });

  constructor(private fb: FormBuilder) {
  }

  success() {
    console.log('success');
  }

  fail() {
    console.log('fail');
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
