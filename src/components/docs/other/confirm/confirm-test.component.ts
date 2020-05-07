import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmComponent, ModalService, TabComponent, UI } from 'junte-ui';
import { PopoverComponent } from 'projects/junte-ui/src/lib/overlays/popover/popover.component';
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
  types = {confirm: ConfirmComponent};
  popover: PopoverComponent;

  @ViewChild('code') code: TabComponent;

  typeControl = this.fb.control(ContentType.popover);

  builder = this.fb.group({
    type: this.typeControl
  });

  constructor(private modalService: ModalService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
