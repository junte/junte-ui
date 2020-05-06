import { Component, ComponentFactoryResolver, Injector, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PopoverComponent, TabComponent, UI } from 'junte-ui';
import { Scheme } from 'projects/junte-ui/src/lib/core/enums/scheme';
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
  schemas = Scheme;
  layouts = PopoverPlacements;

  titleControl = this.fb.control(true);
  triggerControl = this.fb.control(PopoverTriggers.click);
  typeControl = this.fb.control(ContentType.default);
  schemeControl = this.fb.control(Scheme.primary);
  layoutControl = this.fb.control(PopoverPlacements.top);

  builder = this.fb.group({
    trigger: this.triggerControl,
    title: this.titleControl,
    type: this.typeControl,
    scheme: this.schemeControl,
    layout: this.layoutControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }
}
