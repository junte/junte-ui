import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverComponent, Position, TabComponent, Triggers, UI } from 'junte-ui';
import { CATEGORIES } from 'src/consts';
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
export class PopoverTestComponent {

  ui = UI;
  localUi = LocalUI;
  types = {popover: PopoverComponent};
  categories = CATEGORIES;
  keys = Object.keys;
  triggerType = Triggers;
  contentType = ContentType;

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

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }
}
