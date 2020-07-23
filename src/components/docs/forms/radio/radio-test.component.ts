import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, RadioComponent, TabComponent, UI } from 'junte-ui';
import { Hero } from 'src/enums/hero';
import { LocalUI } from 'src/enums/local-ui';
import { Language } from '../../shared/code-highlight/enum';

@Component({
  selector: 'app-radio-test',
  templateUrl: './radio-test.component.html',
  styleUrls: ['./radio-test.component.scss']
})
export class RadioTestComponent implements OnInit {

  ui = UI;
  language = Language;
  hero = Hero;
  localUi = LocalUI;
  types = {radio: RadioComponent};

  @ViewChild('code') code: TabComponent;
  @ViewChild('block') block: BlockComponent;

  sizeControl = this.fb.control(null);
  disableControl = this.fb.control(false);

  builder = this.fb.group({
    size: this.sizeControl,
    disable: this.disableControl
  });

  heroControl = this.fb.control(Hero.spiderman, Validators.required);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.disableControl.valueChanges.subscribe(disabled =>
      disabled ? this.heroControl.disable() : this.heroControl.enable());
  }

  submit() {
    this.block.success();
    setTimeout(() => this.form.reset(), 3000);
  }

}
