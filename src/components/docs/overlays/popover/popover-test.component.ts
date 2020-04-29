import { Component, ComponentFactoryResolver, Injector, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalClosingOption, ModalService, PopoverComponent, TabComponent, UI } from 'junte-ui';
import { ContentType, Size } from 'src/components/docs/overlays/modal/modal-test.component';
import { LocalUI } from 'src/enums/local-ui';

export enum ContentType {
  templateRef = 'templateRef',
  componentRef = 'componentRef'
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
  contentType = ContentType;

  titleControl = this.fb.control(true);
  typeControl = this.fb.control(ContentType.templateRef);

  builder = this.fb.group({
    title: this.titleControl,
    type: this.typeControl,
  });

  @ViewChild('code') code: TabComponent;

  constructor(private fb: FormBuilder) {
  }
}
