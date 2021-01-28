import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI, MessageComponent, TabComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-message-test',
  templateUrl: './message-test.component.html',
  styleUrls: ['./message-test.component.scss']
})
export class MessageTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {message: MessageComponent};
  handbook = HANDBOOK;

  @ViewChild('code') code: TabComponent;

  schemeControl = this.fb.control(null);

  builder = this.fb.group({
    scheme: this.schemeControl,
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

}
