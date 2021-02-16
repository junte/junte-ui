import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI, MessageComponent, TabComponent } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-message-test',
  templateUrl: './empty-test.component.html',
  styleUrls: ['./empty-test.component.scss']
})
export class EmptyTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {message: MessageComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/shared/empty';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=5930%3A29';

  @ViewChild('code') code: TabComponent;

  messageControl = this.fb.control(true);
  descriptionControl = this.fb.control(true);
  customControl = this.fb.control(false);

  builder = this.fb.group({
    message: this.messageControl,
    description: this.descriptionControl,
    custom: this.customControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());

    this.descriptionControl.valueChanges
      .subscribe(value => {
        if (value) {
          this.customControl.enable({emitEvent: false});
        } else {
          this.customControl.disable({emitEvent: false});
        }
      });
  }

}
