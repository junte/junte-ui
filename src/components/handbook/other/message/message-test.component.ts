import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UI, MessageComponent, TabsComponent } from 'junte-ui';
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

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/shared/message';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=5930%3A29';

  @ViewChild('tabs') tabs: TabsComponent;

  schemeControl = this.fb.control(null);
  iconControl = this.fb.control(true);

  builder = this.fb.group({
    scheme: this.schemeControl,
    icon: this.iconControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }

}
