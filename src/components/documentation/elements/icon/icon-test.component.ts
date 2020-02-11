import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { IconComponent, TabComponent, UI, ModalService, ModalOptions } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { SelectIconComponent } from './select-icon/select-icon.component';

@Component({
  selector: 'app-icon-test',
  templateUrl: './icon-test.component.html',
  styleUrls: ['./icon-test.component.scss']
})
export class IconTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  icon = IconComponent;

  @ViewChild('code', {static: false}) code: TabComponent;

  icons = [];

  iconControl = this.fb.control({path: ['font'], name: 'map', value: UI.icons.font.map});
  sizeControl = this.fb.control(UI.size.normal);

  form = this.fb.group({
    icon: this.iconControl,
    size: this.sizeControl,
  });

  constructor(private modal: ModalService,
              private injector: Injector,
              private cfr: ComponentFactoryResolver,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form.valueChanges
      .subscribe(() => this.code.flash());
  }

  select() {
    const component = this.cfr.resolveComponentFactory(SelectIconComponent)
      .create(this.injector);
    component.instance.selected.subscribe(icon => {
      this.iconControl.setValue(icon);
      this.modal.close();
    });
    const options = new ModalOptions({
      title: {text: 'Select icon'},
      maxHeight: 600
    });
    this.modal.open(component, options);
  }
}
