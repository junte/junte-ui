import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BadgeComponent, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

@Component({
  selector: 'app-badge-test',
  templateUrl: './badge-test.component.html',
  styleUrls: ['./badge-test.component.scss']
})
export class BadgeTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {badge: BadgeComponent};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/elements/badge';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2089%3A34';

  @ViewChild('tabs') tabs: TabsComponent;

  positionControl = this.fb.control(null);
  overflowControl = this.fb.control(null);
  valueControl = this.fb.control(5);
  colorControl = this.fb.control(UI.color.primary);
  textControl = this.fb.control(false);

  builder = this.fb.group({
    position: this.positionControl,
    overflow: this.overflowControl,
    value: this.valueControl,
    color: this.colorControl,
    text: this.textControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    this.textControl.valueChanges
      .subscribe(value => {
        if (value) {
          this.overflowControl.disable();
          this.valueControl.disable();
        } else {
          this.overflowControl.enable();
          this.valueControl.enable();
        }
      });
  }

}
