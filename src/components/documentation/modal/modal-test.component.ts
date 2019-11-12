import { Component, ComponentFactoryResolver, Injector, TemplateRef, ViewChild } from '@angular/core';
import { ModalTestFactoryComponent } from './test.component';
import { UI } from '../../../../projects/junte-ui/src/lib/enum/ui';
import { ModalService } from '../../../../projects/junte-ui/src/lib/components/modal/modal.service';
import { ModalOptions } from '../../../../projects/junte-ui/src/lib/components/modal/modal.component';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})

export class ModalTestComponent {

  ui = UI;

  @ViewChild('content', {static: false})
  content: TemplateRef<any>;

  @ViewChild('footer', {static: false})
  footer: TemplateRef<any>;

  constructor(private modalService: ModalService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver) {
  }

  openModal() {
    const options = new ModalOptions({
      title: {
        text: 'Login',
        icon: 'settings:animated:default'
      },
      maxWidth: '400px'
    });
    this.modalService.open(this.content, this.footer, options);
  }


  openCalendar() {
    const component = this.cfr.resolveComponentFactory(ModalTestFactoryComponent).create(this.injector);
    const options = new ModalOptions({
      title: {
        text: 'Calendar',
        icon: UI.icons.calendar
      },
      maxHeight: '1024px',
      maxWidth: '400px'
    });
    this.modalService.open(component, this.footer, options);
  }

  close() {
    this.modalService.close();
  }
}
