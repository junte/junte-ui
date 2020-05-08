import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmComponent, ModalService, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum UsingType {
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
  usingType = UsingType;
  types = {confirm: ConfirmComponent};

  @ViewChild('code') code: TabComponent;

  usingControl = this.fb.control(UsingType.popover);

  builder = this.fb.group({
    using: this.usingControl
  });

  constructor(private modalService: ModalService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
