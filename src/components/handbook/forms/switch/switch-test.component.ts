import { KeyValue } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointService, SwitchComponent, SwitchGroupComponent, TabComponent, UI } from 'junte-ui';
import { HANDBOOK, HEROES } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

enum SwitchType {
  single,
  group
}

@Component({
  selector: 'app-switch-test',
  templateUrl: './switch-test.component.html',
  styleUrls: ['./switch-test.component.scss']
})
export class SwitchTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  types = {
    switch: SwitchComponent,
    group: SwitchGroupComponent
  };
  handbook = HANDBOOK;
  heroes = HEROES;
  language = Language;
  switchType = SwitchType;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/switch';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=2570%3A2784';

  @ViewChild('code')
  code: TabComponent;

  sizeControl = this.fb.control(null);
  labelControl = this.fb.control(false);
  iconsControl = this.fb.control(true);
  tagsControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  colsControl = this.fb.control(null);
  typeControl = this.fb.control(SwitchType.single);
  alignControl = this.fb.control(UI.align.center);

  builder = this.fb.group({
    size: this.sizeControl,
    label: this.labelControl,
    icons: this.iconsControl,
    tags: this.tagsControl,
    disabled: this.disabledControl,
    cols: this.colsControl,
    type: this.typeControl,
    align: this.alignControl
  });

  switchControl = this.fb.control(false);
  heroControl = this.fb.control([this.heroes.captain.code], Validators.required);

  form = this.fb.group({
    switch: this.switchControl,
    hero: this.heroControl
  });

  originalOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => 0;

  constructor(private fb: FormBuilder,
              public breakpoint: BreakpointService) {
  }

  ngOnInit() {
    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.switchControl.disable({emitEvent: false})
        : this.switchControl.enable({emitEvent: false});
    });

    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }
}
