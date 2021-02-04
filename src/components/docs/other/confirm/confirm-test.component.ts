import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmComponent, ModalService, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

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

  ui = UI;
  localUi = LocalUI;
  usingType = UsingType;
  contentType = ContentType;
  types = {confirm: ConfirmComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/tree/master/projects/junte-ui/src/lib/shared/confirm';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=7771%3A1';

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
