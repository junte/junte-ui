import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverComponent, Position, TabsComponent, Triggers, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';

export enum ContentType {
  default = 'default',
  custom = 'custom'
}

@Component({
  selector: 'app-popover-test',
  templateUrl: './popover-test.component.html',
  styleUrls: ['./popover-test.component.scss']
})
export class PopoverTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {popover: PopoverComponent};
  handbook = HANDBOOK;
  keys = Object.keys;
  triggerType = Triggers;
  contentType = ContentType;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/overlays/popover';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI?node-id=56%3A9';

  titleControl = this.fb.control(true);
  triggerControl = this.fb.control(Triggers.hover);
  contentTypeControl = this.fb.control(ContentType.default);
  layoutControl = this.fb.control(Position.top);
  dropdownControl = this.fb.control(false);

  builder = this.fb.group({
    trigger: this.triggerControl,
    title: this.titleControl,
    type: this.contentTypeControl,
    layout: this.layoutControl,
    dropdown: this.dropdownControl
  });

  @ViewChild('tabs') tabs: TabsComponent;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));
  }
}
