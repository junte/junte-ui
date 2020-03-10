import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BlockComponent, RadioComponent, TabComponent, UI } from 'junte-ui';
import { LocalUI } from 'src/enums/local-ui';
import { Hero } from '../../../../enums/hero';
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

  heroControl = this.fb.control(null, Validators.required);

  form = this.fb.group({
    hero: this.heroControl
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.builder.valueChanges
      .subscribe(() => this.code.flash());
  }

  submit() {
    this.block.success();
    this.form.reset();
  }

}
