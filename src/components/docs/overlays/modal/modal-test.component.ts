import { Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalOptions, ModalService, TabComponent, UI, ModalClosingOption } from 'junte-ui';
import { ModalComponent } from 'junte-ui';
import { ModalTestFactoryComponent } from 'src/components/docs/overlays/modal/test.component';
import { Language } from 'src/components/docs/shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

export enum Size {
  small = 400,
  normal = 600,
  large = 800
}

export enum ContentType {
  templateRef = 'templateRef',
  componentRef = 'componentRef'
}

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})

export class ModalTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  language = Language;
  size = Size;
  contentType = ContentType;
  types = {modal: ModalComponent, options: ModalOptions};

  @ViewChild('code') code: TabComponent;

  widthControl = this.fb.control(Size.large);
  heightControl = this.fb.control(Size.large);
  closingControl = this.fb.control(ModalClosingOption.enable);
  titleControl = this.fb.control(true);
  iconControl = this.fb.control(false);
  footerControl = this.fb.control(false);
  typeControl = this.fb.control(ContentType.templateRef);

  builder = this.fb.group({
    width: this.widthControl,
    height: this.heightControl,
    closing: this.closingControl,
    title: this.titleControl,
    icon: this.iconControl,
    footer: this.footerControl,
    type: this.typeControl,
  });

  @ViewChild('content')
  content: TemplateRef<any>;

  @ViewChild('footer')
  footer: TemplateRef<any>;

  constructor(private modalService: ModalService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  openModal() {
    const options = new ModalOptions({
      maxWidth: this.widthControl.value,
      maxHeight: this.heightControl.value,
      closing: this.closingControl.value
        ? ModalClosingOption.enable
        : ModalClosingOption.disable,
      title: {
        text: this.titleControl.value ? 'Modal' : null,
        icon: this.iconControl.value ? UI.icons.settings : null
      },
      footer: this.footerControl.value ? this.footer : null
    });
    this.modalService.open(this.content, options);
  }


  openCalendar() {
    const component = this.cfr.resolveComponentFactory(ModalTestFactoryComponent).create(this.injector);
    const options = new ModalOptions({
      maxWidth: this.widthControl.value,
      maxHeight: this.heightControl.value,
      closing: this.closingControl.value ? ModalClosingOption.enable : ModalClosingOption.disable,
      title: {
        text: this.titleControl.value ? 'Calendar' : null,
        icon: this.iconControl.value ? UI.icons.calendar : null
      },
      footer: this.footerControl.value ? this.footer : null
    });
    this.modalService.open(component, options);
  }

  close() {
    this.modalService.close();
  }
}
