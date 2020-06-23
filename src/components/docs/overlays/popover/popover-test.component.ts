import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverComponent, TabComponent, UI } from 'junte-ui';
import { PopoverPlacements, PopoverTriggers } from 'projects/junte-ui/src/lib/overlays/popover/enums';
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
  keys = Object.keys;
  triggerType = PopoverTriggers;
  contentType = ContentType;

  titleControl = this.fb.control(true);
  triggerControl = this.fb.control(PopoverTriggers.hover);
  contentTypeControl = this.fb.control(ContentType.default);
  layoutControl = this.fb.control(PopoverPlacements.top);

  builder = this.fb.group({
    trigger: this.triggerControl,
    title: this.titleControl,
    type: this.contentTypeControl,
    layout: this.layoutControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }
}
