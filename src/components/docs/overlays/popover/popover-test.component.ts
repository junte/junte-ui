import { Component, ComponentFactoryResolver, Injector, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';

export enum TriggerType {
  click = 'click',
  hover = 'hover'
}

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
  triggerType = TriggerType;
  contentType = ContentType;

  titleControl = this.fb.control(true);
  triggerControl = this.fb.control(TriggerType.click);
  typeControl = this.fb.control(ContentType.default);

  builder = this.fb.group({
    trigger: this.triggerControl,
    title: this.titleControl,
    type: this.typeControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }
}
