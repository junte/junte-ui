import { Component, ComponentFactoryResolver, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModalComponent, ModalOptions, ModalService, TabComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { ModalTestFactoryComponent } from './test.component';
import { Language } from '../../shared/code-highlight/enum';
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
  types = {modal: ModalComponent, options: ModalOptions};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/overlays/modal';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=1709%3A3466';

  @ViewChild('code') code: TabComponent;

  widthControl = this.fb.control(Size.large);
  heightControl = this.fb.control(Size.normal);
  closingControl = this.fb.control(false);
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
      hold: this.closingControl.value,
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
      hold: this.closingControl.value,
      title: {
        text: this.titleControl.value ? 'Calendar' : null,
        icon: this.iconControl.value ? UI.icons.calendar : null
      },
      footer: this.footerControl.value ? this.footer : null
    });
    component.instance.footer = this.footerControl.value;
    component.instance.closed.subscribe(() => this.close());
    this.modalService.open(component, options);
  }

  close() {
    this.modalService.close();
  }

  trackHero(index, hero: { id: number }) {
    return hero.id;
  }
}
