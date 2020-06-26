import { Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalClosingOption, ModalComponent, ModalOptions, ModalService, TabComponent, UI } from 'junte-ui';
import { ModalTestFactoryComponent } from 'src/components/docs/overlays/modal/test.component';
import { Language } from 'src/components/docs/shared/code-highlight/enum';
import { LocalUI } from 'src/enums/local-ui';

export enum Size {
  tiny = 200,
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
  closingOptions = ModalClosingOption;
  types = {modal: ModalComponent, options: ModalOptions};

  @ViewChild('code') code: TabComponent;

  widthControl = this.fb.control(Size.large);
  heightControl = this.fb.control(Size.normal);
  closingControl = this.fb.control(true);
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

  selectControl = this.fb.control(null);
  selectForm = this.fb.group({
    select: this.selectControl
  });

  heroes = [
    {id: 1, name: 'Spiderman', avatar: 'assets/images/heroes/spiderman.svg', likes: 381},
    {id: 2, name: 'Ironman', avatar: 'assets/images/heroes/ironman.svg', likes: 412},
    {id: 3, name: 'Captain America', avatar: 'assets/images/heroes/captain.svg', likes: 221}
  ];

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

  trackHero(index, hero: { id: number }) {
    return hero.id;
  }
}
