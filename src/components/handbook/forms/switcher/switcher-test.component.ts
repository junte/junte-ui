import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, SwitcherComponent, SwitcherOptionDirective, TabsComponent, UI } from 'junte-ui';
import { HANDBOOK } from 'src/consts';
import { LocalUI } from 'src/enums/local-ui';
import { Hero } from 'src/enums/hero';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-switcher-test',
  templateUrl: './switcher-test.component.html',
  styleUrls: ['./switcher-test.component.scss']
})

export class SwitcherTestComponent implements OnInit {

  ui = UI;
  localUi = LocalUI;
  hero = Hero;
  language = Language;
  types = {switcher: SwitcherComponent, option: SwitcherOptionDirective};
  handbook = HANDBOOK;

  gitlab = 'https://gitlab.com/junte/junte-ui/-/tree/master/projects/junte-ui/src/lib/forms/switcher';
  figma = 'https://www.figma.com/file/EIUNwZCXL9Nm5BKQKl43mfDr/Junte-UI-v1?node-id=3074%3A11997';

  @ViewChild('tabs') tabs: TabsComponent;
  @ViewChild('block') block: BlockComponent;

  modeControl = this.fb.control(null);
  orientationControl = this.fb.control(null);
  iconControl = this.fb.control(false);
  dotControl = this.fb.control(true);
  badgeControl = this.fb.control(false);
  templateControl = this.fb.control(false);
  allowEmptyControl = this.fb.control(true);
  marksControl = this.fb.control(true);
  disabledControl = this.fb.control(false);
  disabledOptionControl = this.fb.control(false);
  heightControl = this.fb.control(false);
  indicatorControl = this.fb.control(false);
  loadingControl = this.fb.control(false);
  selectAllControl = this.fb.control(false);
  adaptedControl = this.fb.control(true);

  builder = this.fb.group({
    mode: this.modeControl,
    orientation: this.orientationControl,
    icon: this.iconControl,
    dot: this.dotControl,
    badge: this.badgeControl,
    template: this.templateControl,
    allowEmpty: this.allowEmptyControl,
    marks: this.marksControl,
    disabled: this.disabledControl,
    disabledOption: this.disabledOptionControl,
    height: this.heightControl,
    indicator: this.indicatorControl,
    loading: this.loadingControl,
    selectAll: this.selectAllControl,
    adapted: this.adaptedControl
  });

  heroControl = this.fb.control(null, !this.allowEmptyControl.value ? Validators.required : null);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.tabs.flash(1));

    this.templateControl.valueChanges
      .subscribe(value => {
        if (value) {
          this.iconControl.disable({emitEvent: false});
          this.dotControl.disable({emitEvent: false});
          this.badgeControl.disable({emitEvent: false});
        } else {
          this.iconControl.enable({emitEvent: false});
          this.dotControl.enable({emitEvent: false});
          this.badgeControl.enable({emitEvent: false});
        }
      });

    this.disabledControl.valueChanges.subscribe((disabled) => {
      disabled ? this.heroControl.disable({emitEvent: false}) : this.heroControl.enable({emitEvent: false});
    });

    this.modeControl.valueChanges.subscribe(mode => this.heroControl
      .setValue(mode === UI.select.mode.single ? [] : null));

    // this.modeControl.valueChanges.subscribe(mode => mode === SelectMode.single ?
    //   this.selectAllControl.disable({emitEvent: false}) : this.selectAllControl.enable({emitEvent: false}));
  }

  submit() {
    this.block.success();
    this.form.reset();
  }
}
