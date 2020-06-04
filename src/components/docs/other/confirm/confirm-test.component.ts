import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmComponent, ModalService, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { AnalyticsType } from 'src/enums/analyticsType';

export enum UsingType {
  popover = 'popover',
  modal = 'modal'
}

export enum ContentType {
  message = 'message',
  template = 'template'
}

@Component({
  selector: 'app-confirm-test',
  templateUrl: './confirm-test.component.html',
  styleUrls: ['./confirm-test.component.scss']
})
export class ConfirmTestComponent  implements OnInit {

  analyticsType = AnalyticsType;
  ui = UI;
  localUi = LocalUI;
  usingType = UsingType;
  contentType = ContentType;
  types = {confirm: ConfirmComponent};

  @ViewChild('code') code: TabComponent;

  usingControl = this.fb.control(UsingType.popover);
  contentControl = this.fb.control(ContentType.message);

  builder = this.fb.group({
    using: this.usingControl,
    content: this.contentControl
  });

  constructor(private modalService: ModalService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
